import React from "react"
import { Newsletter } from "../components/Newsletter/Newsletter"
import { graphql } from "gatsby"
import Checkout from "../components/Checkout/Checkout"
import { Helmet } from "react-helmet"

const ZamowieniePage = () => {
  return (
    <>
      <Helmet>
        <title>Wloski od zera. Zamówienie</title>
        <meta name="description" content='' />
        <meta name='robots' content="noindex" />
        {/* TODO: description */}
      </Helmet>
      <Checkout />
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