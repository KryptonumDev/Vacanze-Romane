import React from "react"
import styled from "styled-components"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import useWindowSize from "../../utils/useWindowSize"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1370px) {
    padding: 78px 102px 120px;
  }
  @media only screen and (max-width: 1268px) {
    ${Paragraph} {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 1022px) {
    padding: 40px 30px 80px;
  }
  @media only screen and (max-width: 798px) {
    ${Paragraph} {
      font-size: 18px;
    }
  }
`

const StyledFlex = styled(Flex)`
  @media only screen and (max-width: 1370px) {
    margin: 72px 0 0;
  }
  @media only screen and (max-width: 798px) {
    margin: 42px 0 0;
    flex-direction: column;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1022px) {
    margin: 0;
  }
`
const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledFlexFull = styled(Flex)`
  @media only screen and (max-width: 798px) {
    flex: 1 1 100%;
  }
`

const StyledFlexStart = styled(Flex)`
  @media only screen and (max-width: 798px) {
    align-items: flex-start;
  }
`

const StyledParagraphHigher = styled(Paragraph)`
  @media only screen and (max-width: 980px) {
    margin: 100px 60px;
  }
  @media only screen and (max-width: 798px) {
    margin: 20px 0px;
  }
`

const StyledParagraphRight = styled(Paragraph)`
  @media only screen and (max-width: 980px) {
    margin: 30px 0 0;
  }
  @media only screen and (max-width: 798px) {
    margin: 16px 0 0;
    line-height: 1.7em;
  }
`

const StyledDecoratedParagraph = styled(Paragraph)`
  @media only screen and (max-width: 798px) {
    margin: 6px 0 0;
  }
`

const StyledFlexLeft = styled(Flex)`
  @media only screen and (max-width: 798px) {
    margin: 0;
  }
`
const StyledFlexRight = styled(Flex)`
  @media only screen and (max-width: 798px) {
    margin: 37px 0 0;
  }
`

const StyledItalianParagraph = styled(Paragraph)`
  @media only screen and (max-width: 798px) {
    margin: 12px 0 0;
  }
`

const BottegaSection = () => {
  const width = useWindowSize()
  return (
    <Wrapper padding="0" bg="light">
      <StyledContentWrapper direction="column" padding="78px 219px 140px 102px">
        <Flex>
          <StyledFlexFull margin="0 16px 0 0" flex="3" flexDirection="column">
            <StyledCapitalizedText margin="0 0 0 5px">
              Bottega
            </StyledCapitalizedText>
            <Line />
            <StyledParagraph margin="0 11px 0 0px">
              Włoskie słowo <span className="decor">bottega</span> oznacza
              niewielki sklepik, będący też często pracownią czy warsztatem, do
              którego możemy zajrzeć oraz wejść prosto z ulicy.
              <br />
              Zwykle spotkamy w nim właściciela, który chętnie zamieni z nami
              parę słów.
            </StyledParagraph>
          </StyledFlexFull>
          <Flex flex="1"></Flex>
        </Flex>
        <StyledFlexStart flexDirection="column" alignItems="flex-end">
          <StyledParagraphRight margin="33px 39px 0 0px">
            <span className="decor">andare a bottega</span>
            {width <= 798 && <br />} - iść do “bottegi”
          </StyledParagraphRight>
          <StyledParagraphHigher margin="131px 78px 0 120px">
            Lekcje, które będzie można tu wykupić jako kontynuację “Kursu
            włoskiego od zera”, są jeszcze w przygotowaniu.
          </StyledParagraphHigher>
          <StyledDecoratedParagraph margin="12px 0 0">
            <span className="decor">ancora in fase di preparazione</span>
          </StyledDecoratedParagraph>
          <StyledFlex alignSelf="center" margin="82px 86px 0 0">
            <StyledFlexLeft
              margin="0 60px 0 0"
              flexDirection="column"
              alignItems="center"
              flex="1"
            >
              <Paragraph textAlign="center" margin="0">
                w przygotowaniu
                <br />
                <span className="decor">in preparazione</span>
              </Paragraph>
              <StyledItalianParagraph margin="36px 0 0" textAlign="center">
                Włoski od zera
                <br />
                Część Druga 2.0.
              </StyledItalianParagraph>
            </StyledFlexLeft>
            <StyledFlexRight
              margin="0 0 0 60px"
              flexDirection="column"
              alignItems="center"
              flex="1"
            >
              <Paragraph textAlign="center" margin="0">
                w przygotowaniu
                <br />
                <span className="decor">in preparazione</span>
              </Paragraph>
              <StyledItalianParagraph margin="36px 0 0" textAlign="center">
                Włoski od zera
                <br />
                Część Trzecia 3.0.
              </StyledItalianParagraph>
            </StyledFlexRight>
          </StyledFlex>
        </StyledFlexStart>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default BottegaSection
