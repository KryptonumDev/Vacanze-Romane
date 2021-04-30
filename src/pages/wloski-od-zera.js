import { graphql } from "gatsby"
import React, { useRef, useState } from "react"
import { useEffect } from "react"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"
import PageHeader from "../components/PageHeader/PageHeader"
import CoursesStagesSection from "../components/SectionsComponents/CoursesStagesSection"
import SEO from "../components/SEO/SEO"
import useWindowSize from "../utils/useWindowSize"

const CoursesPage = ({ data }) => {
  const courses = [
    "Kurs włoskiego od zera",
    "Wprowadzenie 0.0",
    "Część pierwsza 1.0",
    "Kontynuacja",
  ]
  const images = {
    "Kurs włoskiego od zera": data.image.wloskiOdZeraObraz,
    "Wprowadzenie 0.0": data.image.wloskiOdZeraWprowadzenieObraz,
    "Część pierwsza 1.0": data.image.wloskiOdZeraCzescPierwszaObraz,
    Kontynuacja: data.image.wloskiOdZeraKontynuacja,
  }
  const [activeCourse, setActiveCourse] = useState("Kurs włoskiego od zera")
  const activeImage = images[activeCourse]
  const [page, setPage] = useState(0)
  const pageLength = 17
  const postsRef = useRef()
  const [firstLaunch, setFirstLaunch] = useState(true)
  let width = useWindowSize()

  const handleClick = (e, course) => {
    e.preventDefault()
    setActiveCourse(course)
    setPage(0)
    // scroll()
  }

  return (
    <>
      <SEO meta={data.image.seoMetaTags} />
      <PageHeader
        paragraph={data.image.title}
        imgFluid={
          activeCourse === "Kurs włoskiego od zera" && width <= 650
            ? data.image.wloskiOdZeraObrazMobile.fluid
            : activeImage.fluid
        }
        bg="green"
        withNav
        blog={!firstLaunch}
      />
      <CategoryNavigation
        bg="green"
        categories={courses}
        activeCategory={activeCourse}
        setActiveCategory={handleClick}
        courses
      />
      <CoursesStagesSection
        lessons={data.lessons.nodes}
        activeCourse={activeCourse}
        page={page}
        setPage={setPage}
        pageLength={pageLength}
        ref={postsRef}
      />
    </>
  )
}

export const query = graphql`
  {
    image: datoCmsWloskiOdZeraPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      wloskiOdZeraObraz {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      wloskiOdZeraObrazMobile {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }

      wloskiOdZeraWprowadzenieObraz {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      wloskiOdZeraKontynuacja {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      wloskiOdZeraCzescPierwszaObraz {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
    lessons: allDatoCmsLesson(sort: { fields: lessonNumber }) {
      nodes {
        id
        lekcjaPoziom
        lessonNumber
        lessonTitle
      }
    }
  }
`

export default CoursesPage
