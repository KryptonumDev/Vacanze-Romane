import React from "react"
import Image from "gatsby-image"
import { Wrapper } from "../Wrapper/Wrapper"
import {
  ContentWrapper,
  CapitalizeText,
  Paragraph,
  ColumnText,
  TextEmphasized,
  Overlay,
} from "../../assets/styles/HomeStyles"

const HowToLearnSection = ({ imgFluid }) => {
  return (
    <Wrapper bg="light">
      <Overlay bg="#f1e2cc" />
      <ContentWrapper direction="column" padding="110px 20% 90px 90px">
        <CapitalizeText>Jak się uczyć?</CapitalizeText>
        <span className="line"></span>
        <Paragraph>
          <span data-crossed="impari" className="crossed">
            Uczysz się{" "}
          </span>
          już w trakcie oglądania i słuchania kolejnych lekcji, bez potrzeby
          wielokrotnego samodzielnego studiowania notatek.
        </Paragraph>
        <ColumnText>
          Kurs przygotowany został tak, aby przyswajanie podstaw języka odbywało
          się w sposób intuicyjny i stopniowy, podobny do sposobu poznawania
          języka przez dziecko. Ponadto każdemu nowemu zagadnieniu towarzyszą
          obrazowe wyjaśnienia i zróżnicowane ćwiczenia.
        </ColumnText>
        <TextEmphasized>
          <span className="word">imparare -</span> uczyć się
        </TextEmphasized>
        <Image fluid={imgFluid} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HowToLearnSection
