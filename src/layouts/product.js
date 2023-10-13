import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import { BlogNews } from "../components/BlogNews/BlogNews"
import Content from "../components/ProductContent/ProductContent"
// import PageHeader from "../components/PageHeader/PageHeader"
import { Helmet } from "react-helmet"

const ProductLayout = ({ data, data: { wp: { product: { seo } } } }) => {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
      </Helmet>
      <PageHeader
        // paragraph={data.wp.product.title}
        subheader={data.wp.product.title}
        article
        bg="brown"
        withNav
      />
      <Content data={data.wp.product} />
      <BlogNews />
    </>
  )
}

export const query = graphql`
  query ProductQuery($id: ID!) {
    wp{
      product(id: $id, idType: ID) {
        seo {
          title
          metaDesc
        }
        productTags {
          nodes {
            slug
          }
        }
        productId
        title
        slug
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        ... on WordPress_SimpleProduct {
          id
          name
          regularPrice
          price
        }
        product {
          courseContent{
            text
            icon{
              altText
              mediaItemUrl
            }
          }
          sections {
            ... on WordPress_Product_Product_Sections_TwoColumnCards {
              fieldGroupName
              text
              title
              list {
                title
                text
                linkTitle
                list : listaPodTekstem {
                  text: trescElementuListy
                }
                file {
                  altText
                  mediaItemUrl
                }
              }
            }
            ... on WordPress_Product_Product_Sections_Video {
              fieldGroupName
              linkTitle
              video
              title
              file {
                altText
                mediaItemUrl
              }
            }
            ... on WordPress_Product_Product_Sections_OneColumnList {
              fieldGroupName
              title
              list {
                text
              }
            }
            ... on WordPress_Product_Product_Sections_TwoColumnList {
              fieldGroupName
              subTitle
              title
              text
              list {
                text
              }
            }
            ... on WordPress_Product_Product_Sections_TextSection {
              fieldGroupName
              content
              title
            }
            ... on WordPress_Product_Product_Sections_FlexSection {
              fieldGroupName
              content
              title
              link{
                url
              }
              image {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export default ProductLayout
