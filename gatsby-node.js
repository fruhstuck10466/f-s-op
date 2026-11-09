/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const fs = require(`fs`)
const path = require(`path`)
const { siteMetadata } = require(`./gatsby-config`)

// --- Journal: programmatic page creation from markdown files ---

// Explicit schema so GraphQL types are stable even with only one post so far.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: JournalFrontmatter
    }

    type JournalFrontmatter {
      title: String
      date: Date @dateformat
      slug: String
      excerpt: String
      image: String
    }
  `)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error loading journal posts`, result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach(post => {
    createPage({
      path: `/journal/${post.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/journal-post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&apos;`)
}


// Builds an image sitemap for /products/ from the Product ItemList JSON-LD
// already embedded on that page (see src/pages/products.js), since the
// catalogue is a hardcoded array rather than GraphQL-sourced content.
exports.onPostBuild = async ({ reporter }) => {
  const publicDir = path.join(__dirname, `public`)
  const productsHtmlPath = path.join(publicDir, `products`, `index.html`)

  if (!fs.existsSync(productsHtmlPath)) {
    reporter.warn(
      `image-sitemap: public/products/index.html not found, skipping image sitemap generation`
    )
    return
  }

  const html = fs.readFileSync(productsHtmlPath, `utf8`)
  const match = html.match(
    /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/
  )

  if (!match) {
    reporter.warn(
      `image-sitemap: no JSON-LD found on /products/, skipping image sitemap generation`
    )
    return
  }

  let productData
  try {
    productData = JSON.parse(match[1])
  } catch (err) {
    reporter.warn(`image-sitemap: failed to parse product JSON-LD (${err.message})`)
    return
  }

  const items = productData.itemListElement || []

  if (items.length === 0) {
    reporter.warn(
      `image-sitemap: no products found in JSON-LD, skipping image sitemap generation`
    )
    return
  }

  const productsUrl = `${siteMetadata.siteUrl}/products/`

  const imageEntries = items
    .map(({ item }) => {
      if (!item || !item.image) return ``
      return `    <image:image>
      <image:loc>${escapeXml(item.image)}</image:loc>
      <image:title>${escapeXml(item.name)}</image:title>
    </image:image>`
    })
    .filter(Boolean)
    .join(`\n`)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(productsUrl)}</loc>
${imageEntries}
  </url>
</urlset>
`

  fs.writeFileSync(path.join(publicDir, `image-sitemap.xml`), xml)
  reporter.info(`image-sitemap: wrote image-sitemap.xml with ${items.length} images`)

  // gatsby-plugin-robots-txt already wrote public/robots.txt earlier in this
  // build (site-level gatsby-node.js hooks run after plugin hooks) — append
  // a second Sitemap: line rather than fighting that plugin's config, since
  // its `sitemap` option doesn't safely accept an array of URLs.
  const robotsPath = path.join(publicDir, `robots.txt`)
  const imageSitemapUrl = `${siteMetadata.siteUrl}/image-sitemap.xml`

  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, `utf8`)
    if (!robotsContent.includes(imageSitemapUrl)) {
      fs.appendFileSync(robotsPath, `Sitemap: ${imageSitemapUrl}\n`)
      reporter.info(`image-sitemap: appended image sitemap reference to robots.txt`)
    }
  } else {
    reporter.warn(
      `image-sitemap: public/robots.txt not found, skipping robots.txt update`
    )
  }
}
