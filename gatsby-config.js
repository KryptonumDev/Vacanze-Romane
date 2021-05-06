require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Vacanze Romane`,
    siteUrl: `https://www.wloskiodzera.pl/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */
        interval: 300,

        /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */
        timeout: 30000,

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            name: "Homemade Apple",
            file: "https://fonts.googleapis.com/css2?family=Homemade+Apple",
          },
          {
            name: "Cormorant Garamond",
            file: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond",
          },
          {
            name: "Lato",
            file: "https://fonts.googleapis.com/css2?family=Lato",
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
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
        icon: `src/assets/images/logo-vacanze.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
