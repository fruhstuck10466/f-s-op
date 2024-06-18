require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
    title: `Faholo Chemicals - Chemical Manufacturer & Distributer`,
    description: `We manufacture and distribute various external pharmaceutical products, specializing in antiseptics, disinfectants, sanitizers, detergents, and cosmetics. Our expertise and market experience ensure quality, customer care, and honesty.`,
    author: `@jobmusembi`,
    keywords: `Leading detergent manufacturer in Kenya, Leading disinfectant manufacturer in Kenya, Leading antiseptic manufacturer in Kenya, Top topical chemical manufacturer in Nairobi`,
    siteUrl: `https://www.faholochemicals.co.ke`,
    image: `src/assets/images/faholo-team-social.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_ID, // Google Analytics / GA
          ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.faholochemicals.co.ke',
        sitemap: 'https://www.faholochemicals.co.ke/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faholo Chemicals Ltd`,
        short_name: `Faholo Chemicals`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#F4F2F0`,
        display: `minimal-ui`,
        icon: `src/assets/images/faholo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
