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
      basicLessons: allDatoCmsLesson(
        filter: { lekcjaPoziom: { eq: "wprowadzenie" } }
      ) {
        nodes {
          id
          lessonTitle
          lekcjaPoziom
          lessonNumber
        }
      }
      firstLevelLessons: allDatoCmsLesson(
        filter: { lekcjaPoziom: { eq: "część pierwsza" } }
      ) {
        nodes {
          id
          lessonTitle
          lekcjaPoziom
          lessonNumber
        }
      }
      continueLevelLessons: allDatoCmsLesson(
        filter: { lekcjaPoziom: { eq: "kontynuacja" } }
      ) {
        nodes {
          id
          lessonTitle
          lekcjaPoziom
          lessonNumber
        }
      }
    }
  `)

  result.data.redArticles.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.slug, {
      lower: true,
      strict: true,
      trim: true
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
      strict: true,
      trim: true
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

  result.data.basicLessons.nodes
    .sort((a, b) => {
      return Number(a.lessonNumber) - Number(b.lessonNumber)
    })
    .forEach((lesson, i) => {
      const slugifiedTitle = slugify(lesson.lessonTitle, {
        lower: true,
        strict: true,
        trim: true
      })
      const slugifiedBaseUrl = slugify(lesson.lekcjaPoziom, { lower: true,
        strict: true,
        trim: true })
      createPage({
        path: `wloski-od-zera/${slugifiedBaseUrl}/${slugifiedTitle}`,
        component: lessonTemplate,
        context: {
          id: lesson.id,
          number: lesson.lessonNumber,
          prev:
            i >= 1 &&
            lesson.lekcjaPoziom ===
              result.data.basicLessons.nodes[i - 1].lekcjaPoziom
              ? result.data.basicLessons.nodes[i - 1].lessonTitle
              : null,
          next:
            i < result.data.basicLessons.nodes.length - 1 &&
            lesson.lekcjaPoziom ===
              result.data.basicLessons.nodes[i + 1].lekcjaPoziom
              ? result.data.basicLessons.nodes[i + 1].lessonTitle
              : null,
        },
      })
    })
  result.data.firstLevelLessons.nodes
    .sort((a, b) => {
      return Number(a.lessonNumber) - Number(b.lessonNumber)
    })
    .forEach((lesson, i) => {
      const slugifiedTitle = slugify(lesson.lessonTitle, {
        lower: true,
        strict: true,
        trim: true
      })
      const slugifiedBaseUrl = slugify(lesson.lekcjaPoziom, { lower: true,
        strict: true,
        trim: true })
      createPage({
        path: `wloski-od-zera/${slugifiedBaseUrl}/${slugifiedTitle}`,
        component: lessonTemplate,
        context: {
          id: lesson.id,
          number: lesson.lessonNumber,
          prev:
            i >= 1 &&
            lesson.lekcjaPoziom ===
              result.data.firstLevelLessons.nodes[i - 1].lekcjaPoziom
              ? result.data.firstLevelLessons.nodes[i - 1].lessonTitle
              : null,
          next:
            i < result.data.firstLevelLessons.nodes.length - 1 &&
            lesson.lekcjaPoziom ===
              result.data.firstLevelLessons.nodes[i + 1].lekcjaPoziom
              ? result.data.firstLevelLessons.nodes[i + 1].lessonTitle
              : null,
        },
      })
    })
    result.data.continueLevelLessons.nodes
      .sort((a, b) => {
        return Number(a.lessonNumber) - Number(b.lessonNumber)
      })
      .forEach((lesson, i) => {
        const slugifiedTitle = slugify(lesson.lessonTitle, {
          lower: true,
          strict: true,
          trim: true
        })
        const slugifiedBaseUrl = slugify(lesson.lekcjaPoziom, { lower: true,
          strict: true,
          trim: true })
        createPage({
          path: `wloski-od-zera/${slugifiedBaseUrl}/${slugifiedTitle}`,
          component: lessonTemplate,
          context: {
            id: lesson.id,
            number: lesson.lessonNumber,
            prev:
              i >= 1 &&
              lesson.lekcjaPoziom ===
                result.data.continueLevelLessons.nodes[i - 1].lekcjaPoziom
                ? result.data.continueLevelLessons.nodes[i - 1].lessonTitle
                : null,
            next:
              i < result.data.continueLevelLessons.nodes.length - 1 &&
              lesson.lekcjaPoziom ===
                result.data.continueLevelLessons.nodes[i + 1].lekcjaPoziom
                ? result.data.continueLevelLessons.nodes[i + 1].lessonTitle
                : null,
          },
        })
      })
}
