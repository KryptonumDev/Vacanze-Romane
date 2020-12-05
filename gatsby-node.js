const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const lessonTemplate = path.resolve(`src/layouts/lesson.js`)
  const result = await graphql(`
    query allArticlesAndLessons {
      redArticles: allDatoCmsArticle(
        filter: {
          category: { in: ["Kultura", "Sztuka", "Podróże", "Kuchnia"] }
        }
      ) {
        nodes {
          title
          category
          slug
          id
        }
      }
      blueArticles: allDatoCmsArticle(
        filter: {
          category: { in: ["Grammatica", "Vocabolario", "Frasi e citazioni"] }
        }
      ) {
        nodes {
          title
          category
          slug
          id
        }
      }
      allDatoCmsLesson {
        nodes {
          lessonTitle
          lekcjaPoziom
          lessonNumber
          id
        }
      }
    }
  `)

  result.data.redArticles.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.slug, {
      lower: true,
    })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
        category: article.category,
      },
    })
  })

  result.data.blueArticles.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.slug, {
      lower: true,
    })
    createPage({
      path: `in-italiano/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
        category: article.category,
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
        number: lesson.lessonNumber.split("Lekcja")[1].trim(),
      },
    })
    console.log(lesson.lessonTitle, lesson.lessonNumber)
    console.log(`Created: wloski-od-zera/${slugifiedBaseUrl}/${slugifiedTitle}`)
  })
}
