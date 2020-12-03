import React, { useState } from "react"
import { graphql } from "gatsby"
import slugify from "slugify"
import PageHeader from "../components/PageHeader/PageHeader"
import GridWrapper from "../components/GridWrapper/GridWrapper"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import BlogSection from "../components/SectionsComponents/BlogSection"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"

const InItalianoPage = ({ data }) => {
  const categories = ["Grammatica", "Vocabolario", "Frasi e citazioni"]
  const [activeCategory, setActiveCategory] = useState(null)
  const [page, setPage] = useState(0)
  const pageLength = 6

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
    setPage(0)
  }
  const {
    allDatoCmsArticle: { nodes },
  } = data

  return (
    <>
      <PageHeader
        paragraph="in italiano"
        imgFluid={nodes[0]?.featuredimage.fluid}
        bg="blue"
        withNav
      />
      <CategoryNavigation
        bg="blue"
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={handleClick}
        italiano
      />
      <BlogSection
        page={page}
        setPage={setPage}
        pageLength={pageLength}
        activeCategory={activeCategory}
        posts={nodes}
      />
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle(
      filter: {
        category: { in: ["Frasi e citazioni", "Grammatica", "Vocabolario"] }
      }
    ) {
      nodes {
        title
        category
        id
        featuredimage {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default InItalianoPage
