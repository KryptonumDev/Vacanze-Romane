import React from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const CoursesStagesSection = () => {
  return (
    <Wrapper padding="0" bg="light">
      <ContentWrapper padding="90px 107px 110px 102px">
        <Flex margin="0 16px 0 0" flex="1" flexDirection="column">
          <CapitalizeText margin="0 0 0 5px">
            Etapy kursu od zera
          </CapitalizeText>
          <Line />
          <Paragraph margin="0 52px 0 5px">
            Tempo, w jakim chcesz robić postępy, dostosujesz do własnych,
            indywidualnych potrzeb i&nbsp;możliwości.
          </Paragraph>
        </Flex>
        <Flex margin="140px 0 0" flex="1" flexDirection="column">
          <Paragraph fontSize="18px" lineHeight="1.44em" letterSpacing="1px">
            Jeżeli dopiero zaczynasz - zacznij od WPROWADZENIA. Jest to część
            wstępna kursu, dzięki której zadomowisz się w podstawach języka
            włoskiego i dalsza samodzielna nauka będzie znacnzie łatwiejsza.
          </Paragraph>
          <Paragraph
            margin="32px 0 0"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
          >
            Kolejny etap, czyli CZĘŚĆ PIERWSZA, pomoże Ci zacząć mówić o sobie
            i&nbsp;używać włoskich czasowników.
          </Paragraph>
          <Paragraph
            margin="32px 0 0"
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
          >
            Obie te części kursu przygotują Cię do dalszej nauki, którą możesz
            kontunuować samodzielnie, korzystając z dostępnych odpłatnie
            i&nbsp;podzielonych na kolejne etapy lekcji. Informacje o następnych
            częściach “Kursu języka włoskiego od zera” pojawią się w zakłądce
            KONTYNUACJA.
          </Paragraph>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CoursesStagesSection
