import React from "react"
// import SEO from "../components/SEO/SEO"
import { Newsletter } from "../components/Newsletter/Newsletter"
import { graphql } from "gatsby"
import Checkout from "../components/Checkout/Checkout"

const ZamowieniePage = () => {
  return (
    <>
      {/* <SEO meta={data.datoCmsShopPage.seoMetaTags} /> */}
      <Checkout/>
      <Newsletter />
    </>
  )
}

export default ZamowieniePage


export const query = graphql`
  {
    lessons: allDatoCmsLesson(sort: {lessonNumber: ASC}) {
      nodes {
        id
        lekcjaPoziom
        lessonNumber
        lessonTitle
      }
    }
  }
`