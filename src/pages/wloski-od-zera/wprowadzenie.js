import { graphql } from "gatsby"
import React, { useRef } from "react"
import { useEffect } from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesIntroductorySection from "../../components/SectionsComponents/CoursesIntroductorySection"
import useWindowSize from "../../utils/useWindowSize"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

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

const WprowadzeniePage = ({ data }) => {
  const width = useWindowSize()
  const wrapperRef = useRef()
  useEffect(() => {
    wrapperRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])
  return (
    <>
      <PageHeader
        paragraph="introduzione"
        imgFluid={width < 864 && data.datoCmsHomePage.backgroundImage.fluid}
        subheader={width >= 864 && "Wprowadzenie 0.0."}
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesIntroductorySection
        ref={wrapperRef}
        grid
        lessons={data.allDatoCmsLesson.nodes}
      />
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsLesson(
      sort: { fields: lessonNumber }
      filter: { lekcjaPoziom: { eq: "wprowadzenie" } }
    ) {
      nodes {
        id
        lekcjaPoziom
        lessonNumber
        lessonTitle
      }
    }
    datoCmsHomePage {
      backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default WprowadzeniePage
