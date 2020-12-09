import React from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Crossed from "../Crossed/Crossed"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"
import Button from "../Button/Button"
import styled from "styled-components"

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
    margin: 50px 0 0;
  }
  @media only screen and (max-width: 645px) {
    margin: 24px 0 0;
  }
`
const CoursesContinueSection = () => {
  return (
    <Wrapper padding="0" bg="white">
      <StyledContentWrapper padding="103px 120px 95px 102px">
        <Flex margin="0" flex="1" flexDirection="column">
          <StyledCapitalizedText color="var(--brown)" margin="0 0 0 10px">
            KONTYNUACJA “KURSU WŁOSKIEGO OD ZERA”
          </StyledCapitalizedText>
          <Line bg="var(--brown)" />
          <StyledParagraph
            fontFamily="Cormorant Garamond"
            fontSize="36px"
            lineHeight="1.11em"
            letterSpacing="1px"
            margin="0 52px 0 0"
          >
            Jeśli masz już opanowane podstawy “Kursu języka włoskiego od zera”,
            możesz kontynuować naukę korzystając z pakietów płatnych lekcji.
            <br />
            Każdy pakiet będzie składał się z wielu filmów, z e-booka dokładnie
            opisującego materiał z filmów oraz z ćwiczeń na zakończenie każdej
            filmowej lekcji.
            <br />
            Wszystkie kolejne części kursu dostępne będą do kupienia w zakładce
            BOTTEGA
          </StyledParagraph>
        </Flex>
        <StyledColumnFlex
          margin="140px 0 0 15px"
          flex="1"
          flexDirection="column"
        >
          <SecondParagraph
            fontFamily="Lato"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
          >
            Poniżej znajdziesz dokładny spis treści każdej kolejnej części
            “Kursu języka włoskiego od zera”. W tej chwili kolejne części kursu
            są dopiero w przygotowaniu.
          </SecondParagraph>
        </StyledColumnFlex>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default CoursesContinueSection
