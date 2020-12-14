import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import BottegaSection from "../components/SectionsComponents/BottegaSection"

const BottegaPage = ({ data }) => {
  return (
    <>
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
      bottegaBg {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
export default BottegaPage
