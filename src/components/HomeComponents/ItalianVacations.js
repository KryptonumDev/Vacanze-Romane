import React from "react"
import Image from "gatsby-image"
import { Wrapper } from "../Wrapper/Wrapper"
import Line from "../Line/Line"
import { Link, graphql, useStaticQuery } from "gatsby"
import Crossed from "../Crossed/Crossed"
import {
  ContentWrapper,
  CapitalizeText,
  Paragraph,
  Overlay,
  Flex,
} from "../../assets/styles/HomeStyles"
import styled from "styled-components"
import { StructuredText } from "react-datocms/structured-text"
import Markdown from "../Markdown"

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

const StyledParagraph = styled.div`
  @media only screen and (max-width: 1181px) {
    margin-top: 40px;
    font-size: 28px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 28px;
    font-size: 18px;
  }

  h2{
    color: var(--beige-2, #F1E2CC);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Cormorant Garamond';
    font-size: clamp(18px, calc(24vw/7.68), 36px);
    font-style: normal;
    font-weight: 400;
    line-height: 127.778%;
    letter-spacing: 1px;
  }

  p{
    margin-top: 24px;
    color: var(--beige-2, #F1E2CC);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: clamp(15px, calc(16vw/7.68), 16px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1px;
    max-width: 380px;
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
    margin: 0 0 48px;
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
  margin-bottom: 96px;
  @media only screen and (max-width: 798px) {
    padding: 0;
    margin-bottom: 0;
  }
`
const StyledOverlay = styled(Overlay)`
  @media only screen and (max-width: 798px) {
    margin-top: 0;
  }
`

const Button = styled(Link)`
  display: block;
  margin-top: 24px;
  background: var(--beige-2, #F1E2CC);
  padding: 16px 32px;
  color: var(--dead-green, #143325);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;

  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--beige-2);
    background-color: var(--dead-green);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const query = graphql`
  {
    datoCmsHomePage{
      italianVacationTitle
      italianVacationText
      italianVacationLink
      italianVacationImage{
        fluid{
            ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

const ItalianVacations = () => {
  const data = useStaticQuery(query)
  return (
    <StyledWrapper padding="0 0 103px" direction="row" gap="143px" bg="light">
      <StyledOverlay green right bg="var(--brown)" />
      <StyledContentWrapper
        flex="3"
        direction="row"
        padding="110px 90px 90px 100px"
        padding1780="110px 90px 90px 100px"
      >
        <StyledImageWrapper className="image" margin="40px 0 0">
          <StyledImage fluid={data.datoCmsHomePage.italianVacationImage.fluid} />
        </StyledImageWrapper>
        <StyledContentFlex className="texts" margin="0 0 0 76px">
          <StyledCapitalizeText color="var(--beige-2)" margin="0 0 0 10px">
            {data.datoCmsHomePage.italianVacationTitle}
          </StyledCapitalizeText>
          <Line bg="var(--beige-2)" width="85%" />
          <StyledParagraph
            lineHeight="1.28em"
            color="var(--beige-2)"
            margin="40px 0 0"
            maxWidth="648px"
          >
            <Markdown>
              {data.datoCmsHomePage.italianVacationText}
            </Markdown>
          </StyledParagraph>
          <Button to={data.datoCmsHomePage.italianVacationLink}>
            Jadę! Klik!
          </Button>
        </StyledContentFlex>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default ItalianVacations
