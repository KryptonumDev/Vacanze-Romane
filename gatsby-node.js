const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query allArticles {
      allDatoCmsArticle {
        nodes {
          title
          id
        }
      }
    }
  `)

  result.data.allDatoCmsArticle.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.title, {
      lower: true,
    })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
      },
    })
  })
}
