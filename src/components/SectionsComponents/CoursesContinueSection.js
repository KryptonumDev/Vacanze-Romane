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

const CoursesContinueSection = () => {
  return (
    <Wrapper padding="0" bg="white">
      <ContentWrapper padding="103px 120px 95px 102px">
        <Flex margin="0" flex="1" flexDirection="column">
          <CapitalizeText color="var(--brown)" margin="0 0 0 10px">
            KONTYNUACJA “KURSU WŁOSKIEGO OD ZERA”
          </CapitalizeText>
          <Line bg="var(--brown)" />
          <Paragraph
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
          </Paragraph>
        </Flex>
        <Flex margin="140px 0 0 15px" flex="1" flexDirection="column">
          <Paragraph
            fontFamily="Lato"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
          >
            Poniżej znajdziesz dokładny spis treści każdej kolejnej części
            “Kursu języka włoskiego od zera”. W tej chwili kolejne części kursu
            są dopiero w przygotowaniu.
          </Paragraph>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CoursesContinueSection
