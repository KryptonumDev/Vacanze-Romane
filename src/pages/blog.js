import React, { useRef, useState } from "react"
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
  const [page, setPage] = useState(0)
  const pageLength = 6
  const postsRef = useRef()

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
    setPage(0)
    postsRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const {
    allDatoCmsArticle: { nodes },
  } = data

  return (
    <>
      <PageHeader
        paragraph="A tavola"
        imgFluid={nodes[0]?.featuredimage.fluid}
        bg="red"
        withNav
      />
      <CategoryNavigation
        bg="red"
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={handleClick}
        smaller
      />
      <BlogSection
        page={page}
        setPage={setPage}
        pageLength={pageLength}
        activeCategory={activeCategory}
        posts={nodes}
        ref={postsRef}
      />
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        slug
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

export default BlogPage
