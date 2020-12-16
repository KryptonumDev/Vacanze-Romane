import { graphql } from "gatsby"
import React, { useRef, useState } from "react"
import { useEffect } from "react"
import slugify from "slugify"
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation"
import PageHeader from "../components/PageHeader/PageHeader"
import CoursesStagesSection from "../components/SectionsComponents/CoursesStagesSection"

const navItems = [
  {
    name: "Wprowadzenie 0.0",
    link: "/wloski-od-zera/wprowadzenie",
  },
  {
    name: "Część pierwsza 1.0",
    link: "/wloski-od-zera/czesc-pierwsza",
  },
  {
    name: "Kontynuacja",
    link: "/wloski-od-zera/kontynuacja",
  },
]

const CoursesPage = ({ data }) => {
  const courses = [
    "Kurs włoskiego od zera",
    "Wprowadzenie 0.0",
    "Część pierwsza 1.0",
    "Kontynuacja",
  ]
  const [activeCourse, setActiveCourse] = useState(courses[0])
  const [page, setPage] = useState(0)
  const pageLength = 15
  const postsRef = useRef()

  const scroll = () =>
    postsRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" })
  const handleClick = (e, course) => {
    e.preventDefault()
    setActiveCourse(course)
    setPage(0)
    // scroll()
  }

  useEffect(() => {
    setActiveCourse(courses[0])
  }, [])

  return (
    <>
      <PageHeader
        paragraph={data.image.title}
        imgFluid={data.image.wloskiOdZeraObraz.fluid}
        bg="green"
        withNav
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
      wloskiOdZeraObraz {
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
