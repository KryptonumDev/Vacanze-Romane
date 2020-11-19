import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
`
const PageLayout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Navigation />
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
)
export default PageLayout
