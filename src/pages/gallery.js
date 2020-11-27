import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import PageHeader from "../components/PageHeader/PageHeader"
import GridWrapper from "../components/GridWrapper/GridWrapper"

const StyledImage = styled(Image)`
  picture {
    img {
      transition: opacity 0.5s ease-in, transform 0.3s ease-in-out !important;
    }
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`

const GalleryPage = ({ data }) => (
  <>
    <PageHeader>gallery</PageHeader>
    While artists work from real to the abstract, architects must work from the
    abstract to the real.
    <GridWrapper>
      {data.allFile.nodes.map(node => (
        <StyledImage fluid={node.childImageSharp.thumb} />
      ))}
    </GridWrapper>
  </>
)
export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 408, maxHeight: 252, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          full: fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default GalleryPage
