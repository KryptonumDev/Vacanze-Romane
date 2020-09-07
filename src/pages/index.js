import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 100px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 65px;
    margin: 0;
    width: 70%;
    max-width: 700px;
    line-height: 1em;
    z-index: 1;
  }

  p {
    font-size: 20px;
    line-height: 1.5em;
    margin: 24px 0;
    width: 50%;
    max-width: 400px;
    z-index: 1;
  }
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 45%;
  height: 100vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Hello 9m13 Website</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        eaque molestiae dolore sint quos! Fugit, perferendis? Laudantium
        pariatur at eligendi!
      </p>
      <Button>estimate project</Button>
      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </ContentWrapper>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90, trim: 30) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
