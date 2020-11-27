import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;
  background-color: ${({ bg }) => (bg === "light" ? "var(--bg-home)" : "")};
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
    font-size: 24px;
    line-height: 1.25em;
    letter-spacing: 1px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`

const PageHeader = ({ title, bg, subtitle, paragraph, imgFluid }) => (
  <ContentWrapper bg={bg}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{paragraph}</p>
    <StyledImage fluid={imgFluid} />
  </ContentWrapper>
)
export default PageHeader
