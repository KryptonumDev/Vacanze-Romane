require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Włoski od zera`,
    siteUrl: `https://www.wloskiodzera.pl/`,
    description: `Włoski od zera to internetowa nauka języka włoskiego od zera. Przeznaczona dla samouków i nie tylko.`,
    author: `@kryptonum`,
  },
  trailingSlash: "always",
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        interval: 300,
        timeout: 30000,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wp",
        url: "https://wloskiodzera.headlesshub.com/graphql",
      },
    },
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
    // `gatsby-plugin-offline`,
  ],
}
