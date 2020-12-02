import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesStagesSection from "../../components/SectionsComponents/CoursesStagesSection"

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
  return (
    <>
      <PageHeader
        paragraph="corso di italiano da zero"
        imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesStagesSection />
    </>
  )
}

export const query = graphql`
  {
    datoCmsHomePage {
      ciaoTitle
      title
      courseName
      subheader
      backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default CoursesPage
