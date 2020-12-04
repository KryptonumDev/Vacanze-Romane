import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesIntroductorySection from "../../components/SectionsComponents/CoursesIntroductorySection"

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
  return (
    <>
      <PageHeader
        paragraph="introduzione"
        subheader="Wprowadzenie 0.0."
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesIntroductorySection grid lessons={data.allDatoCmsLesson.nodes} />
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
  }
`

export default WprowadzeniePage
