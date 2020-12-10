import React, { forwardRef } from "react"
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
const CoursesFirstSection = forwardRef(({ grid, lessons }, ref) => {
  return (
    <Wrapper padding="0" bg="white" ref={ref}>
      {!grid && (
        <ContentWrapper padding="103px 120px 95px 102px">
          <Flex margin="0 120px 0 0" flex="1" flexDirection="column">
            <CapitalizeText color="var(--brown)" margin="0 0 0 10px">
              CZĘŚĆ PIERWSZA 1.0. TO KOMUNIKACJA
            </CapitalizeText>
            <Line bg="var(--brown)" />
            <Paragraph
              fontFamily="Lato"
              fontSize="18px"
              lineHeight="1.44em"
              letterSpacing="1px"
              margin="128px 50px 0 0"
            >
              Po opanowaniu podstaw przechodzimy do lekcji, które składają się
              na “Część Pierwszą” kursu. <br />
              <br />
              Część Pierwsza 1.0. to komunikacja.
              <br />
              <br /> A komunikacja językowa to przede wszystkim czasowniki - bo
              bez czasowników nie opowiemy o żadnym działaniu, o żadnej akcji.
            </Paragraph>
          </Flex>
          <Flex margin="140px 0 0" flex="1" flexDirection="column">
            <Paragraph>
              Dzięki lekcjom “Części Pierwszej” poczujesz się pewnie w gąszczu
              podstawowych włoskich czasowników regularnych i nieregularnych.
              Zaczniesz bez trudu poruszać się w ich odmianach. A gdy trzeba
              będzie opowiedzieć krótko o sobie - po włosku? Nie ma sprawy!{" "}
              <Crossed
                bottom="calc(50% - 4px)"
                textBottom="-36px"
                textLeft="28px"
                italianText="Nessun problema!"
                bg="var(--black)"
                decorSize="24px"
              >
                Żaden problem!
              </Crossed>
            </Paragraph>
            <Button
              bg="green"
              arrowRight
              margin="96px 0 0"
              text="Lekcja 1.1."
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
})

export default CoursesFirstSection
