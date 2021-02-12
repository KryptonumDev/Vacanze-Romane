import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import AboutMeSection from "../components/SectionsComponents/AboutMeSection"
import SEO from "../components/SEO/SEO"

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO meta={data.datoCmsAboutpage.seoMetaTags} />
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
export default AboutPage
