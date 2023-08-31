import React from "react"
import { graphql } from "gatsby"
// import PageHeader from "../components/PageHeader/PageHeader"
// import SEO from "../components/SEO/SEO"

const ProductLayout = ({ data }) => {
  return (
    <>
      {data.wp.product.title}
      {data.wp.product.content}
      {/* <SEO meta={data.datoCmsArticle.seoMetaTags} /> */}
      {/* <PageHeader
        subheader={data.wpProduct.title}
        withNav
        article
        bg={'brown'}
      /> */}
    </>
  )
}

export const query = graphql`
  query ProductQuery($id: ID!) {
    wp{
      product(id: $id, idType: ID) {
        title
        content
      }
    }
  }
`

export default ProductLayout
