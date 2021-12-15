import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import CiaoSection from "../components/CiaoSection/CiaoSection"
import HowToLearnSection from "../components/HomeComponents/HowToLearnSection"
import NotOnlyBasicsSection from "../components/HomeComponents/NotOnlyBasicsSection"
import Slider from "../components/Slider/Slider"
import SEO from "../components/SEO/SEO"
import GrammarProblemsSection from "../components/GrammarProblemsSection/GrammarProblemsSection"

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
    <GrammarProblemsSection
      sectionTitle={data.datoCmsHomePage.sectionTitle}
      sectionQuestionTitle={data.datoCmsHomePage.sectionQuestionTitle}
      sectionQuestionTitleItalian={
        data.datoCmsHomePage.sectionQuestionTitleItalian
      }
      buttonText={data.datoCmsHomePage.buttonText}
      paragraphText={data.datoCmsHomePage.paragraphText}
      fluidImg1={data.datoCmsHomePage.problemsImg1.gatsbyImageData}
      fluidImg2={data.datoCmsHomePage.problemsImg2.gatsbyImageData}
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
      sectionTitle
      sectionQuestionTitle
      sectionQuestionTitleItalian
      buttonText
      paragraphText {
        value
      }
      problemsImg1 {
        gatsbyImageData
      }
      problemsImg2 {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
