import React from "react"
import Image from "gatsby-image"
import { Wrapper } from "../Wrapper/Wrapper"
import Line from "../Line/Line"
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

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1040px) {
    padding: 90px 60px 90px 40px;
  }
  @media only screen and (max-width: 798px) {
    flex-direction: column;
    padding: 72px 30px;
  }
`
const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1148px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 18px;
    line-height: 20px;
    margin: 36px 0 0;
  }
`

const StyledCrossed = styled(Crossed)`
  @media only screen and (max-width: 1148px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 18px;
  }
`
const StyledTextEmphasized = styled(TextEmphasized)`
  @media only screen and (max-width: 1148px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 20px;
    align-self: center;
    margin: 50px 0 56px;
  }
`

const StyledCapitalizeText = styled(CapitalizeText)`
  @media only screen and (max-width: 798px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledFlex = styled(Flex)`
  @media only screen and (max-width: 798px) {
    width: 100%;
    margin: 0;
  }
`

const StyledColumnText = styled(ColumnText)`
  align-self: flex-start;
  margin: 20px 0 0;
  font-size: 15px;
`

const HowToLearnSection = ({ imgFluid }) => {
  return (
    <Wrapper direction="row" padding="0" bg="light">
      <Overlay bg="#f1e2cc" />
      <StyledContentWrapper
        flex="3"
        direction="row"
        padding="110px 100px 90px 90px"
        padding1780="110px 110px 90px 90px"
      >
        <StyledFlex margin="0 45px 0 0" className="texts">
          <StyledCapitalizeText margin="0 0 0 10px">
            Jak się uczyć?
          </StyledCapitalizeText>
          <Line bg="var(--brownOp)" width="85%" />
          <StyledParagraph margin="40px 0 0 28px" maxWidth="648px">
            <StyledCrossed
              top="50%"
              textTop="-36px"
              italianText="impari"
              bg="var(--black)"
            >
              Uczysz się
            </StyledCrossed>{" "}
            już w trakcie oglądania i&nbsp;słuchania kolejnych lekcji,
            <br />
            bez potrzeby wielokrotnego samodzielnego studiowania notatek.
          </StyledParagraph>
          <StyledColumnText
            margin="53px 65px 0 0"
            alignSelf="flex-end"
            maxWidth="353px"
          >
            Kurs przygotowany został tak, aby przyswajanie podstaw języka
            odbywało się w&nbsp;sposób intuicyjny i&nbsp;stopniowy, podobny
            do&nbsp;sposobu poznawania języka przez dziecko. Ponadto każdemu
            nowemu zagadnieniu towarzyszą obrazowe wyjaśnienia
            i&nbsp;zróżnicowane ćwiczenia.
          </StyledColumnText>
          <StyledTextEmphasized margin="60px 0 0">
            <span className="word">imparare -</span> uczyć się
          </StyledTextEmphasized>
        </StyledFlex>
        <div className="image">
          <Image fluid={imgFluid} />
        </div>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default HowToLearnSection
