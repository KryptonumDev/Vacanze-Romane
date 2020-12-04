import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import CiaoSection from "../components/CiaoSection/CiaoSection"
import HowToLearnSection from "../components/HomeComponents/HowToLearnSection"
import NotOnlyBasicsSection from "../components/HomeComponents/NotOnlyBasicsSection"
import Slider from "../components/Slider/Slider"

const IndexPage = ({ data }) => (
  <>
    <PageHeader
      title={data.datoCmsHomePage.title}
      subtitle="Internetowa szkoła języka włoskiego"
      paragraph="dla samouków i nie tylko"
      imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
      bg="light"
      fullHeight
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
