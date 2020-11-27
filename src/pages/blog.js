import React from "react"
import { graphql } from "gatsby"
import slugify from "slugify"
import PageHeader from "../components/PageHeader/PageHeader"
import GridWrapper from "../components/GridWrapper/GridWrapper"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"

const BlogPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data

  return (
    <>
      <PageHeader>articles</PageHeader>
      While artists work from real to the abstract, architects must work from
      the abstract to the real.
      <GridWrapper minWidth="380px" gridGap="50px">
        {nodes.map(({ title, featuredimage }) => (
          <ArticlePreview
            key={title}
            link={slugify(title, { lower: true })}
            title={title}
            featuredImageFluid={featuredimage.fluid}
          />
        ))}
      </GridWrapper>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredimage {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default BlogPage
