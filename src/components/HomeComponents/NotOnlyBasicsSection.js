import React from "react"
import Image from "gatsby-image"
import { Wrapper } from "../Wrapper/Wrapper"
import Line from "../Line/Line"
import { graphql, useStaticQuery } from "gatsby"
import Crossed from "../Crossed/Crossed"
import {
  ContentWrapper,
  CapitalizeText,
  Paragraph,
  ColumnText,
  TextEmphasized,
  Overlay,
  ImageWrapper,
  Flex,
} from "../../assets/styles/HomeStyles"
import styled from "styled-components"

const StyledImage = styled(Image)`
  width: 100%;
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1467px) {
    padding: 110px 60px 90px 40px;
  }
  @media only screen and (max-width: 798px) {
    flex-direction: column;
    padding: 72px 30px;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1181px) {
    margin-top: 40px;
    font-size: 28px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 28px;
    font-size: 18px;
  }
`

const StyledCrossed = styled(Crossed)`
  @media only screen and (max-width: 1181px) {
    &::before {
      font-size: 28px !important;
    }
  }
`

const StyledImageWrapper = styled(Flex)`
  @media only screen and (max-width: 798px) {
    width: 100%;
    order: 2;
  }
`

const StyledContentFlex = styled(Flex)`
  @media only screen and (max-width: 798px) {
    padding: 0;
    margin: 0 0 112px;
    width: 100%;
  }
`

const StyledCapitalizeText = styled(CapitalizeText)`
  @media only screen and (max-width: 798px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledWrapper = styled(Wrapper)`
  @media only screen and (max-width: 798px) {
    padding: 0;
  }
`
const StyledOverlay = styled(Overlay)`
  @media only screen and (max-width: 798px) {
    margin-top: 0;
  }
`

const query = graphql`
  {
    datoCmsHomePage {
      crossedPolishWord
      crossedItalianWord
      paragraph
      header
    }
  }
`

const NotOnlyBasicsSection = ({ imgFluid }) => {
  const data = useStaticQuery(query)
  return (
    <StyledWrapper padding="0 0 103px" direction="row" gap="143px" bg="light">
      <StyledOverlay green right bg="var(--dead-green)" />
      <StyledContentWrapper
        flex="3"
        direction="row"
        padding="110px 90px 90px 100px"
        padding1780="110px 90px 90px 100px"
      >
        <StyledImageWrapper className="image" margin="40px 0 0">
          <StyledImage fluid={imgFluid} />
        </StyledImageWrapper>
        <StyledContentFlex className="texts" margin="0 0 0 76px">
          <StyledCapitalizeText color="var(--beige-2)" margin="0 0 0 10px">
            {data.datoCmsHomePage.header}
          </StyledCapitalizeText>
          <Line bg="var(--beige-2)" width="85%" />
          <StyledParagraph
            lineHeight="1.28em"
            color="var(--beige-2)"
            margin="40px 0 0"
            maxWidth="648px"
          >
            {data.datoCmsHomePage.paragraph}{" "}
            <StyledCrossed
              italianText={data.datoCmsHomePage.crossedItalianWord}
              top="50%"
              textBottom="-66px"
              textLeft="90px"
              bg="var(--beige-2)"
            >
              {data.datoCmsHomePage.crossedPolishWord}
            </StyledCrossed>
          </StyledParagraph>
        </StyledContentFlex>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default NotOnlyBasicsSection
