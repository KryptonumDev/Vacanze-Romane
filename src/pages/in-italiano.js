import React, { useEffect, useMemo, useState } from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import ItalianoSection from "../components/SectionsComponents/InItalianoSection"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"
import { useRef } from "react"
import SEO from "../components/SEO/SEO"

const InItalianoPage = ({ data }) => {
  const images = {
    Initaliano: data.bg.bgImage,
    Grammatica: data.bg.inItalianoGrammatica,
    Vocabolario: data.bg.inItalianoVocabolario,
    "Frasi e citazioni": data.bg.inItalianoFrasiECitazioni,
  }
  const [activeCategory, setActiveCategory] = useState("Initaliano")
  const activeImage = images[activeCategory]
  const [page, setPage] = useState(1)
  const pageLength = 6
  const postsRef = useRef()
  const [firstLaunch, setFirstLaunch] = useState(true)

  const scroll = () => {
    setTimeout(() => {
      postsRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }, 150)
  }

  const handleClick = (e, category) => {
    e.preventDefault()
    setActiveCategory(category)
    setPage(1)
    // scroll()
  }
  const {
    allDatoCmsArticle: { nodes },
  } = data

  useEffect(() => {
    setFirstLaunch(false)
  }, [])

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
    let acceoted = ["Grammatica", "Vocabolario", "Frasi e citazioni"]
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
        paragraph="in italiano"
        imgFluid={activeImage.fluid}
        italiano={!firstLaunch}
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      bgImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      inItalianoGrammatica {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      inItalianoVocabolario {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      inItalianoFrasiECitazioni {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default InItalianoPage
