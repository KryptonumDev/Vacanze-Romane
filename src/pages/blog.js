import React, { useState } from "react"
import { graphql } from "gatsby"
import slugify from "slugify"
import PageHeader from "../components/PageHeader/PageHeader"
import GridWrapper from "../components/GridWrapper/GridWrapper"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import BlogSection from "../components/SectionsComponents/BlogSection"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"

const BlogPage = ({ data }) => {
  const categories = ["Kultura", "Sztuka", "Podróże", "Kuchnia"]
  const [activeCategory, setActiveCategory] = useState(null)

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
  }
  const {
    allDatoCmsArticle: { nodes },
  } = data

  return (
    <>
      <PageHeader
        paragraph="A tavola"
        imgFluid={nodes[3].featuredimage.fluid}
        bg="red"
        withNav
      />
      <CategoryNavigation
        bg="red"
        categories={categories}
        setActiveCategory={handleClick}
      />
      <BlogSection activeCategory={activeCategory} posts={nodes} />
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredimage {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default BlogPage
