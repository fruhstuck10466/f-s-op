require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
    title: `Faholo Chemicals`,
    description: `We manufacture and distribute a wide range of pharmaceutical products locally and regionally. We specialize in production of external application products namely; Antiseptics, Disinfectants, Sanitizers, Liquid detergents and Cosmetics. Our strength is founded in our knowledge and wide market experience in the pharmaceutical industry. We believe in quality, customer care and honesty`,
    author: `@jobmusembi`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
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
