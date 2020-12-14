import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../assets/styles/HomeStyles"
import { fadeOutAnimation } from "../components/animations"
import Line from "../components/Line/Line"

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 102px;
  @media only screen and (max-width: 1105px) {
    padding: 40px 30px;
  }
`
const StyledParagraph = styled(Paragraph)`
  font-size: 48px;
  line-height: 1.21em;
  letter-spacing: 1px;
  @media only screen and (max-width: 1081px) {
    font-size: 30px;
    margin: 0 32px 0 5px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 26px;
  }
  @media only screen and (max-width: 645px) {
    font-size: 22px;
    margin: 3px 0 0;
  }
`
const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`
const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1081px) {
    padding: 90px 0 100px 0;
  }
  @media only screen and (max-width: 889px) {
    padding: 80px 0 90px;
  }
  @media only screen and (max-width: 798px) {
    padding: 40px 0 100px;
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  color: var(--black);
`

const StyledText = styled.p`
  font-family: "Lato";
  margin: 32px 0 0;
  font-size: 18px;
`

const NotFoundPage = () => (
  <StyledWrapper>
    <StyledContentWrapper
      key="content"
      variants={fadeOutAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      padding="90px 0 110px 0"
    >
      <Flex margin="0" flex="1" flexDirection="column">
        <StyledCapitalizedText margin="0 0 0 5px">404</StyledCapitalizedText>
        <Line />
        <StyledParagraph>
          Chyba nie możemy znaleźć strony, której szukasz.
        </StyledParagraph>
        <StyledText margin="24px 0 0 0">
          Przejdź na <StyledLink to="/">stronę główną.</StyledLink>
        </StyledText>
      </Flex>
      <Flex margin="0" flex="1" flexDirection="column"></Flex>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default NotFoundPage
