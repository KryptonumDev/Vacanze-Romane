require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Vacanze Romane`,
    siteUrl: `https://wonderful-allen-76ffff.netlify.app/`,
    description: `Vacanze Romane to internetowa szkoła języka włoskiego. Przeznaczona dla samouków i nie tylko.`,
    author: `@kryptonum`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Cormorant Garamond:400",
            "Homemade Apple:400:latin-ext",
            "Lato:400",
          ],
        },
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vacanze Romane szkoła języka włoskiego`,
        short_name: `Vacanze Romane`,
        start_url: `/`,
        background_color: `#f8f5f1`,
        theme_color: `#f8f5f1`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-vacanze.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
