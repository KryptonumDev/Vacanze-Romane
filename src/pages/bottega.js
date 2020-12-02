import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import BottegaSection from "../components/SectionsComponents/BottegaSection"

const BottegaPage = ({ data }) => {
  return (
    <>
      <PageHeader
        paragraph="Bottega"
        imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
        bg="brown"
        withNav
      />
      <BottegaSection />
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
export default BottegaPage
