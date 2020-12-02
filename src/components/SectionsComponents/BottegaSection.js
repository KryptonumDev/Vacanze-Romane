import React from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const BottegaSection = () => {
  return (
    <Wrapper padding="0" bg="light">
      <ContentWrapper direction="column" padding="78px 219px 140px 102px">
        <Flex>
          <Flex margin="0 16px 0 0" flex="1" flexDirection="column">
            <CapitalizeText margin="0 0 0 5px">Bottega</CapitalizeText>
            <Line />
            <Paragraph margin="0 41px 0 0px">
              Włoskie słowo <span className="decor">bottega</span> oznacza
              niewielki sklepik, będący też często pracownią czy warsztatem, do
              którego możemy zajrzeć oraz wejść prosto z ulicy.
              <br />
              Zwykle spotkamy w nim właściciela, który chętnie zamieni z nami
              parę słów.
            </Paragraph>
          </Flex>
          <Flex flex="1"></Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-end">
          <Paragraph margin="33px 39px 0 0px">
            <span className="decor">andare a bottega - </span>iść do “bottegi”
          </Paragraph>
          <Paragraph margin="131px 78px 0 120px">
            Lekcje, które będzie można tu wykupić jako kontynuację “Kursu
            włoskiego od zera”, są jeszcze w przygotowaniu.
          </Paragraph>
          <Paragraph margin="12px 0 0">
            <span className="decor">ancora in fase si preparazione</span>
          </Paragraph>
          <Flex alignSelf="center" margin="82px 86px 0 0">
            <Flex
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
              <Paragraph margin="36px 0 0" textAlign="center">
                Włoski od zera
                <br />
                Część Druga 2.0.
              </Paragraph>
            </Flex>
            <Flex
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
              <Paragraph margin="36px 0 0" textAlign="center">
                Włoski od zera
                <br />
                Część Trzecia 3.0.
              </Paragraph>
            </Flex>
          </Flex>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

export default BottegaSection
