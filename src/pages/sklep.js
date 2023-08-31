import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import BottegaSection from "../components/SectionsComponents/BottegaSection"
import SEO from "../components/SEO/SEO"
import ShopGrid from "../components/SectionsComponents/ShopGrid"
import { BlogNews } from "../components/BlogNews/BlogNews"

const BottegaPage = ({ data }) => {
  return (
    <>
      <SEO meta={data.datoCmsShopPage.seoMetaTags} />
      <PageHeader
        paragraph="Sklep"
        imgFluid={data.datoCmsShopPage.bottegaBg.fluid}
        bg="brown"
        withNav
      />
      <BottegaSection />
      <ShopGrid products={data.wp.products.nodes} />
      <BlogNews/>
    </>
  )
}
export const query = graphql`
  {
    wp {
      products(first: 100) {
        nodes {
          productId
          excerpt
          title
          slug
          productTags {
            nodes {
              slug
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
          ... on WordPress_SimpleProduct {
            price(format: RAW)
            salePrice(format: RAW)
            regularPrice(format: RAW)
          }
        }
      }
    }
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
