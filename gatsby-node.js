const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const lessonTemplate = path.resolve(`src/layouts/lesson.js`)
  const result = await graphql(`
    query allArticlesAndLessons {
      allDatoCmsArticle {
        nodes {
          title
          id
        }
      }
      allDatoCmsLesson {
        nodes {
          lessonTitle
          lekcjaPoziom
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

  result.data.allDatoCmsLesson.nodes.forEach(lesson => {
    const slugifiedTitle = slugify(lesson.lessonTitle, {
      lower: true,
    })
    const slugifiedBaseUrl = slugify(lesson.lekcjaPoziom, { lower: true })
    createPage({
      path: `wloski-od-zera/${slugifiedBaseUrl}/${slugifiedTitle}`,
      component: lessonTemplate,
      context: {
        id: lesson.id,
      },
    })
  })
}
