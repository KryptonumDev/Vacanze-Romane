import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import SEO from "../components/SEO/SEO"
import { PrivacyContent } from "../components/PrivacyContent/PrivacyContent"
import { Newsletter } from "../components/Newsletter/Newsletter"

const RegulaminPage = ({ data }) => {
  return (
    <>
      <SEO meta={data.datoCmsRegulamin.seoMetaTags} />
      <PageHeader
        paragraph="Polityka prywatności"
        bg="brown"
        withNav
      />
      <PrivacyContent data={data.datoCmsRegulamin.content}/>
      <Newsletter/>
    </>
  )
}
export const query = graphql`
  {
    datoCmsRegulamin {
      content{
        blocks
        links
        value
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
export default RegulaminPage
