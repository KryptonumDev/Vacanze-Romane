import { graphql } from "gatsby"
import React, { useEffect, useRef } from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesContinueSection from "../../components/SectionsComponents/CoursesContinueSection"
import useWindowSize from "../../utils/useWindowSize"

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

const KontynuacjaPage = ({ data }) => {
  const width = useWindowSize()
  const wrapperRef = useRef()
  useEffect(() => {
    wrapperRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])
  return (
    <>
      <PageHeader
        paragraph="continuazione"
        imgFluid={width < 864 && data.datoCmsHomePage.backgroundImage.fluid}
        subheader={width >= 864 && "Kontynuacja 2.0."}
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesContinueSection ref={wrapperRef} />
    </>
  )
}
export const query = graphql`
  {
    datoCmsHomePage {
      backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default KontynuacjaPage
