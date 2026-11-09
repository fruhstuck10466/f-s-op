import styled from "styled-components"
import { colorPalette, breakpoints } from "./globalStyles"
import { Link } from "gatsby"

// --- Listing page ---
// Reuses the site-wide Container for identical side padding to every other page.
export const JournalListWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  margin-bottom: 100px;
  padding: 0 40px;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 150px;
    margin-bottom: 50px;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 0 20px;
    margin-top: 130px;
  }
`

// No font overrides — this <h1> inherits Figtree/3vw straight from GlobalStyle.
export const JournalHeading = styled.h1`
  margin-bottom: 1rem;
`

export const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.l}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
  }
`

export const JournalSubheading = styled.p`
  margin-bottom: 3rem;
`

export const JournalCard = styled.div`
  display: block;
  color: ${colorPalette.text};
  background: ${colorPalette.grey};
  border-radius: 8px;
  overflow: hidden;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const JournalBackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: ${colorPalette.text};
  font-size: 0.9rem;

  &:hover {
    opacity: 0.5;
  }
`

export const JournalCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`

// Card title, not a document heading — a styled-components class selector
// naturally outranks the plain "h3 { }" tag rule in GlobalStyle, so this
// override applies without needing !important.
export const JournalCardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 1rem 1rem 0.25rem;
`

export const JournalCardDate = styled.p`
  font-size: 0.8rem;
  color: ${colorPalette.darkgrey};
  margin: 0 1rem 0.5rem;
`

export const JournalCardExcerpt = styled.p`
  margin: 0 1rem 1rem;
`

// --- Single article page ---

export const JournalPostWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  margin-bottom: 100px;
  padding: 0 40px;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 150px;
    margin-bottom: 50px;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 0 20px;
    margin-top: 130px;
  }
`

export const JournalPostImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`

// Inherits Figtree/3vw from GlobalStyle, same as the listing page heading.
export const JournalPostTitle = styled.h1`
  margin-bottom: 0.5rem;
`

export const JournalPostMeta = styled.p`
  color: ${colorPalette.darkgrey};
  margin-bottom: 2rem;
`

export const JournalPostContent = styled.div`
  h2 {
    margin-top: 2rem;
  }

  ul {
    padding-left: 1.5rem;
  }
`