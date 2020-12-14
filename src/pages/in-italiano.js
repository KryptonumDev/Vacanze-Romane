import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import slugify from "slugify"
import PageHeader from "../components/PageHeader/PageHeader"
import GridWrapper from "../components/GridWrapper/GridWrapper"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import ItalianoSection from "../components/SectionsComponents/InItalianoSection"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"
import { useRef } from "react"

const InItalianoPage = ({ data }) => {
  const categories = ["Grammatica", "Vocabolario", "Frasi e citazioni"]
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [page, setPage] = useState(0)
  const pageLength = 6
  const postsRef = useRef()
  const [firstLaunch, setFirstLaunch] = useState(true)

  const scroll = () => {
    postsRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
    setPage(0)
    scroll()
  }
  const {
    allDatoCmsArticle: { nodes },
    bg,
  } = data

  useEffect(() => {
    if (!firstLaunch) {
      setTimeout(() => {
        scroll()
      }, 150)
    }
  }, [page])

  useEffect(() => {
    setFirstLaunch(false)
  }, [])

  return (
    <>
      <PageHeader
        paragraph="in italiano"
        imgFluid={bg.bgImage.fluid}
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
      <ItalianoSection
        page={page}
        setPage={setPage}
        pageLength={pageLength}
        activeCategory={activeCategory}
        posts={nodes}
        ref={postsRef}
        scroll={scroll}
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
    bg: datoCmsInItalianoPage {
      bgImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default InItalianoPage
