import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import CiaoSection from "../components/CiaoSection/CiaoSection"
const IndexPage = ({ data }) => (
  <>
    <PageHeader
      title={data.datoCmsHomePage.title}
      subtitle="Internetowa szkoła języka włoskiego"
      paragraph="dla samouków i nie tylko"
      imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
      bg="light"
    />
    <CiaoSection />
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
    }
  }
`

export default IndexPage
