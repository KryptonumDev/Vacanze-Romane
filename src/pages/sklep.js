import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import BottegaSection from "../components/SectionsComponents/BottegaSection"
import SEO from "../components/SEO/SEO"

const BottegaPage = ({ data }) => {
  return (
    <>
      <SEO meta={data.datoCmsShopPage.seoMetaTags} />
      <PageHeader
        paragraph="Bottega"
        imgFluid={data.datoCmsShopPage.bottegaBg.fluid}
        bg="brown"
        withNav
      />
      <BottegaSection />
    </>
  )
}
export const query = graphql`
  {
    datoCmsShopPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      bottegaBg {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
export default BottegaPage
