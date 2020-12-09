import React from "react"
import styled from "styled-components"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1081px) {
    padding: 90px 70px 100px 60px;
  }
  @media only screen and (max-width: 889px) {
    padding: 80px 30px 90px;
  }
  @media only screen and (max-width: 798px) {
    padding: 40px 30px 100px;
    flex-direction: column;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1081px) {
    font-size: 30px;
    margin: 0 32px 0 5px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 26px;
  }
  @media only screen and (max-width: 645px) {
    font-size: 18px;
    margin: 3px 0 0;
  }
`
const SecondParagraph = styled(Paragraph)`
  @media only screen and (max-width: 645px) {
    font-size: 15px;
    margin: 16px 0 0;
  }
`
const ThirdParagraph = styled(Paragraph)`
  @media only screen and (max-width: 645px) {
    font-size: 15px;
    margin: 16px 0 0;
  }
`

const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledColumnFlex = styled(Flex)`
  @media only screen and (max-width: 798px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 645px) {
    margin-top: 24px;
  }
`

const CoursesStagesSection = () => {
  return (
    <Wrapper padding="0" bg="light">
      <StyledContentWrapper padding="90px 107px 110px 102px">
        <Flex margin="0 16px 0 0" flex="1" flexDirection="column">
          <StyledCapitalizedText margin="0 0 0 5px">
            Etapy kursu od zera
          </StyledCapitalizedText>
          <Line />
          <StyledParagraph margin="0 52px 0 5px">
            Tempo, w jakim chcesz robić postępy, dostosujesz do własnych,
            indywidualnych potrzeb i&nbsp;możliwości.
          </StyledParagraph>
        </Flex>
        <StyledColumnFlex margin="140px 0 0" flex="1" flexDirection="column">
          <SecondParagraph
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
            fontFamily="Lato"
          >
            Jeżeli dopiero zaczynasz - zacznij od WPROWADZENIA. Jest to część
            wstępna kursu, dzięki której zadomowisz się w podstawach języka
            włoskiego i dalsza samodzielna nauka będzie znacnzie łatwiejsza.
          </SecondParagraph>
          <SecondParagraph
            margin="32px 0 0"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
            fontFamily="Lato"
          >
            Kolejny etap, czyli CZĘŚĆ PIERWSZA, pomoże Ci zacząć mówić o sobie
            i&nbsp;używać włoskich czasowników.
          </SecondParagraph>
          <ThirdParagraph
            margin="32px 0 0"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
            fontFamily="Lato"
          >
            Obie te części kursu przygotują Cię do dalszej nauki, którą możesz
            kontunuować samodzielnie, korzystając z dostępnych odpłatnie
            i&nbsp;podzielonych na kolejne etapy lekcji. Informacje o następnych
            częściach “Kursu języka włoskiego od zera” pojawią się w zakłądce
            KONTYNUACJA.
          </ThirdParagraph>
        </StyledColumnFlex>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default CoursesStagesSection
