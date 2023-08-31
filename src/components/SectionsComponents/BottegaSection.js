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

const BottegaSection = () => {
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
              Zwykle spotkamy w nim właściciela, który chętnie zamieni z nami
              parę słów.
            </StyledParagraph>
          </StyledFlexFull>
        </Flex>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default BottegaSection
