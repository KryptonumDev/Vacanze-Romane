import React, { useEffect, useMemo, useRef, useState } from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import BlogSection from "../components/SectionsComponents/BlogSection"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"
import SEO from "../components/SEO/SEO"

const BlogPage = ({ data }) => {
  const images = {
    Blog: data.bg.blogBg,
    Kultura: data.bg.blogKultura,
    Sztuka: data.bg.blogSztuka,
    Podróże: data.bg.blogPodrE,
    Kuchnia: data.bg.blogKuchnia,
  }
  const [activeCategory, setActiveCategory] = useState("Blog")
  const activeImage = images[activeCategory]
  const [page, setPage] = useState(1)
  const pageLength = 6
  const postsRef = useRef()
  const [firstLaunch, setFirstLaunch] = useState(true)

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
    setPage(1)
    // postsRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }
  const {
    allDatoCmsArticle: { nodes },
  } = data

  const categories = useMemo(() => {
    let obj = nodes.reduce((acc, cur) => {
      if (acc[cur.category]) {
        acc[cur.category]++
      } else {
        acc[cur.category] = 1
      }
      return acc
    }, {})

    let arr = []
    let acceoted = ["Kultura", "Sztuka", "Podróże", "Kuchnia"]
    for (let key in obj) {
      if (!acceoted.includes(key)) continue
      arr.push({ name: key, count: obj[key] })
    }
    return arr
  }, [nodes])

  return (
    <>
      <SEO meta={data.bg.seoMetaTags} />
      <PageHeader
        paragraph="A tavola"
        imgFluid={activeImage?.fluid || images.Blog.fluid}
        bg="red"
        withNav
        blog={!firstLaunch}
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
      totalCount
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

    bg: datoCmsBlogPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      blogBg {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      blogKultura {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      blogSztuka {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      blogPodrE {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      blogKuchnia {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default BlogPage
