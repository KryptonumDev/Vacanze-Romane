import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import AboutMeSection from "../components/SectionsComponents/AboutMeSection"

const AboutPage = ({ data }) => {
  return (
    <>
      <PageHeader
        paragraph="O mnie"
        imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
        bg="brown"
        withNav
      />
      <AboutMeSection />
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
export default AboutPage
