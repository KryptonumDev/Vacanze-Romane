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

const HowToLearnSection = ({ imgFluid }) => {
  return (
    <Wrapper direction="row" padding="0" bg="light">
      <Overlay bg="#f1e2cc" />
      <ContentWrapper
        flex="3"
        direction="row"
        padding="110px 100px 90px 90px"
        padding1780="110px 110px 90px 90px"
      >
        <Flex margin="0 45px 0 0" className="texts">
          <CapitalizeText margin="0 0 0 10px">Jak się uczyć?</CapitalizeText>
          <Line bg="var(--brownOp)" width="85%" />
          <Paragraph margin="40px 0 0 28px" maxWidth="648px">
            <Crossed
              top="50%"
              textTop="-36px"
              italianText="impari"
              bg="var(--black)"
            >
              Uczysz się
            </Crossed>{" "}
            już w trakcie oglądania i&nbsp;słuchania kolejnych lekcji,
            <br />
            bez potrzeby wielokrotnego samodzielnego studiowania notatek.
          </Paragraph>
          <ColumnText
            margin="53px 65px 0 0"
            alignSelf="flex-end"
            maxWidth="353px"
          >
            Kurs przygotowany został tak, aby przyswajanie podstaw języka
            odbywało się w sposób intuicyjny i stopniowy, podobny
            do&nbsp;sposobu poznawania języka przez dziecko. Ponadto każdemu
            nowemu zagadnieniu towarzyszą obrazowe wyjaśnienia
            i&nbsp;zróżnicowane ćwiczenia.
          </ColumnText>
          <TextEmphasized margin="60px 0 0">
            <span className="word">imparare -</span> uczyć się
          </TextEmphasized>
        </Flex>
        <div className="image">
          <Image fluid={imgFluid} />
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HowToLearnSection
