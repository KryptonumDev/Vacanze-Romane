import React from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import PageHeader from "../components/PageHeader/PageHeader"
import Paragraph from "../components/Paragraph/Paragraph"
import Line from "../components/Line/line"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-right: 35px;
`
const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 55%;
  height: 100vh;
  object-fit: cover;
`

const AboutPage = ({ data }) => {
  const {
    title,
    paragraphUnderTitle,
    longerParagraph,
    author,
  } = data.datoCmsAboutpage

  return (
    <Wrapper margin="0 0 60px">
      <TextColumn>
        <PageHeader>{title}</PageHeader>
        <Paragraph width="311px">{paragraphUnderTitle}</Paragraph>
        <Line />
        <Paragraph>{longerParagraph}</Paragraph>
        <Paragraph margin="0 0 35px" title>
          {author}
        </Paragraph>
        <Line />
      </TextColumn>
      <StyledImage fluid={data.datoCmsAboutpage.image.fluid} />
    </Wrapper>
  )
}

export const query = graphql`
  {
    datoCmsAboutpage {
      title
      paragraphUnderTitle
      longerParagraph
      author
      image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
