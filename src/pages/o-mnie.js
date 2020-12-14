import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import AboutMeSection from "../components/SectionsComponents/AboutMeSection"

const AboutPage = ({ data }) => {
  return (
    <>
      <PageHeader
        paragraph="O mnie"
        imgFluid={data.datoCmsAboutpage.image.fluid}
        bg="brown"
        withNav
      />
      <AboutMeSection />
    </>
  )
}
export const query = graphql`
  {
    datoCmsAboutpage {
      image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
