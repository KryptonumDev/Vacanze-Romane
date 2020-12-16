import React, { forwardRef } from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import styled from "styled-components"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1081px) {
    padding: 0;
  }
  @media only screen and (max-width: 981px) {
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

const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledColumnFlex = styled(Flex)`
  @media only screen and (max-width: 981px) {
    margin: 50px 0 0;
  }
  @media only screen and (max-width: 645px) {
    margin: 24px 0 0;
  }
`

const StyledFlex = styled(Flex)`
  @media only screen and (max-width: 1221px) {
    flex: 2;
  }
`
const CoursesContinueSection = forwardRef(({ key }, ref) => {
  return (
    <StyledContentWrapper key={key} padding="0">
      <StyledFlex margin="0" flex="1" flexDirection="column">
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
      </StyledFlex>
      <StyledColumnFlex margin="140px 0 0 15px" flex="1" flexDirection="column">
        <SecondParagraph
          fontFamily="Lato"
          fontSize="18px"
          lineHeight="1.44em"
          letterSpacing="1px"
        >
          Poniżej znajdziesz dokładny spis treści każdej kolejnej części “Kursu
          języka włoskiego od zera”. W tej chwili kolejne części kursu są
          dopiero w przygotowaniu.
        </SecondParagraph>
      </StyledColumnFlex>
    </StyledContentWrapper>
  )
})

export default CoursesContinueSection
