import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-home);
  padding: 50px 0 0;
  h1,
  h2 {
    font-family: "Cormorant Garamond";
    color: var(--brown);
    font-weight: 400;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 72px;
    line-height: 0.81em;
  }

  h2 {
    font-size: 24px;
    line-height: 1.25em;
    margin: 24px 0;
    text-transform: uppercase;
  }
  p {
    font-family: "Homemade Apple";
    margin-bottom: 60px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>{data.datoCmsHomePage.title}</h1>
      <h2>Internetowa szkoła języka włoskiego</h2>
      <p>dla samouków i nie tylko</p>
      <StyledImage fluid={data.datoCmsHomePage.backgroundImage.fluid} />
    </ContentWrapper>
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
