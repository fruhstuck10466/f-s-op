import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import journalImages from "../journal-images"
import {
  JournalListWrapper,
  JournalHeading,
  JournalSubheading,
  JournalGrid,
  JournalCard,
  JournalCardImage,
  JournalCardTitle,
  JournalCardDate,
  JournalCardExcerpt,
} from "../styles/journalStyles"

const JournalPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo
        title="Journal | Faholo Chemicals"
        description="In-depth research and articles on the chemicals we manufacture and distribute."
      />
      <JournalListWrapper>
        <JournalHeading>The Journal</JournalHeading>
        <JournalSubheading>
          Research and insights on the chemicals we manufacture and use every
          day.
        </JournalSubheading>
        <JournalGrid>
          {posts.map(post => {
            const imageSrc = journalImages[post.frontmatter.image]

            return (
              <JournalCard
                as={Link}
                to={`/journal/${post.frontmatter.slug}/`}
                key={post.frontmatter.slug}
              >
                {imageSrc && (
                  <JournalCardImage
                    src={imageSrc}
                    alt={post.frontmatter.title}
                  />
                )}
                <JournalCardTitle>{post.frontmatter.title}</JournalCardTitle>
                <JournalCardDate>{post.frontmatter.date}</JournalCardDate>
                <JournalCardExcerpt>
                  {post.frontmatter.excerpt}
                </JournalCardExcerpt>
              </JournalCard>
            )
          })}
        </JournalGrid>
      </JournalListWrapper>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          excerpt
          image
        }
      }
    }
  }
`

export default JournalPage