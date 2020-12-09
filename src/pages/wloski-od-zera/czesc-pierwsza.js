import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesFirstSection from "../../components/SectionsComponents/CoursesFirstSection"
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

const CzescPierwszaPage = ({ data }) => {
  const width = useWindowSize();
  return (
    <>
      <PageHeader
        paragraph="parte prima"
        imgFluid={width < 864 && data.datoCmsHomePage.backgroundImage.fluid}
        subheader={width >= 864 && "Część Pierwsza 1.0."}
        bg="green"
        withNav
        subNav
        navItems={navItems}
      />
      <CoursesFirstSection grid lessons={data.allDatoCmsLesson.nodes} />
    </>
  )
}
export const query = graphql`
  {
    allDatoCmsLesson(
      sort: { fields: lessonNumber }
      filter: { lekcjaPoziom: { regex: "/^cz/" } }
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
export default CzescPierwszaPage
