import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import journalImages from "../journal-images"
import {
  JournalPostWrapper,
  JournalBackLink,
  JournalPostImage,
  JournalPostTitle,
  JournalPostMeta,
  JournalPostContent,
} from "../styles/journalStyles"

const JournalPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const imageSrc = journalImages[post.frontmatter.image]

  return (
    <Layout>
      <Seo
        title={`${post.frontmatter.title} | Faholo Chemicals Journal`}
        description={post.frontmatter.excerpt}
      />
      <JournalPostWrapper>
        <JournalBackLink to="/journal/">← Back to The Journal</JournalBackLink>
        {imageSrc && (
          <JournalPostImage src={imageSrc} alt={post.frontmatter.title} />
        )}
        <JournalPostTitle>{post.frontmatter.title}</JournalPostTitle>
        <JournalPostMeta>{post.frontmatter.date}</JournalPostMeta>
        <JournalPostContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </JournalPostWrapper>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        excerpt
        image
      }
    }
  }
`

export default JournalPostTemplate