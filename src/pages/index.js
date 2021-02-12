import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import CiaoSection from "../components/CiaoSection/CiaoSection"
import HowToLearnSection from "../components/HomeComponents/HowToLearnSection"
import NotOnlyBasicsSection from "../components/HomeComponents/NotOnlyBasicsSection"
import Slider from "../components/Slider/Slider"
import SEO from "../components/SEO/SEO"

const IndexPage = ({ data }) => (
  <>
    <SEO meta={data.datoCmsHomePage.seoMetaTags} />
    <PageHeader
      title={data.datoCmsHomePage.title}
      subtitle={data.datoCmsHomePage.subheader}
      paragraph={data.datoCmsHomePage.decorativeText}
      imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
      bg="light"
      fullHeight
      padding="0 20px"
      home
    />
    <CiaoSection />
    <HowToLearnSection imgFluid={data.datoCmsHomePage.jakSieUczycObraz.fluid} />
    <NotOnlyBasicsSection
      imgFluid={data.datoCmsHomePage.nieTylkoPodstawyObraz.fluid}
    />
    <Slider header="Ostatnio na blogu" />
  </>
)

export const query = graphql`
  {
    datoCmsHomePage {
      ciaoTitle
      title
      courseName
      subheader
      decorativeText
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }

      jakSieUczycObraz {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      nieTylkoPodstawyObraz {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
