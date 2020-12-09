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
import LessonsGrid from "../LessonsGrid/LessonsGrid"
import styled from "styled-components"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 618px) {
    padding: 40px 30px 100px;
  }
`

const CoursesIntroductorySection = ({ grid, lessons }) => {
  return (
    <Wrapper padding="0" bg="white">
      {!grid && (
        <ContentWrapper padding="103px 120px 95px 102px">
          <Flex margin="0 120px 0 0" flex="1" flexDirection="column">
            <CapitalizeText color="var(--brown)" margin="0 0 0 10px">
              Czego nauczysz się na początku?
            </CapitalizeText>
            <Line bg="var(--brown)" />
            <Paragraph
              fontFamily="Lato"
              fontSize="18px"
              lineHeight="1.44em"
              letterSpacing="1px"
              margin="128px 50px 0 0"
            >
              Zakres nowych słów (rzeczowniki, czasowniki, przymiotniki, zaimki
              itd.) umożliwi samodzielne konstruowanie najprostszych zdań i
              wyrażeń.
              <br />
              <br />
              Seria lekcji, dzięki którym bez trudu przyswoisz podstawy
              włoskiego, składa się z 16 filmów.
            </Paragraph>
          </Flex>
          <Flex margin="140px 0 0" flex="1" flexDirection="column">
            <Paragraph>
              Wraz z lekcjami "Wprowadzenia" opanujesz swobodę operowania liczbą
              i&nbsp;rodzajem gramatycznym włoskich rzeczowników
              i&nbsp;przymiotników oraz przyswoisz sobie włoskie zaimki
              dzierżawcze.
              <br />
              <br />
              Poznasz budowę włoskich zdań twierdzących i pytających, a także
              podstawy dotyczące skomplikowanych włoskich{" "}
              <Crossed
                bottom="calc(50% - 4px)"
                textBottom="-36px"
                textLeft="58px"
                italianText="preposizioni"
                bg="var(--black)"
                decorSize="24px"
              >
                przyimków
              </Crossed>
              .
            </Paragraph>
            <Button
              bg="green"
              arrowRight
              margin="96px 0 0"
              text="Lekcja 0.1."
            ></Button>
          </Flex>
        </ContentWrapper>
      )}
      {grid && (
        <StyledContentWrapper padding="103px 102px 95px">
          <LessonsGrid max={lessons.length} lessons={lessons} />
        </StyledContentWrapper>
      )}
    </Wrapper>
  )
}

export default CoursesIntroductorySection
