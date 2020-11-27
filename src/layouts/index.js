import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"

const Wrapper = styled(motion.div)`
  margin: 0 auto;
`

const LocationHeaderBgMap = {
  "/": "light",
  "/wloski-od-zera": "different",
  "/blog": "red",
}

const PageLayout = ({ children }) => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation bg={LocationHeaderBgMap[location.pathname] || "light"} />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  )
}
export default PageLayout
