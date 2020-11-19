import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
`
const PageLayout = ({ children }) => {
  const location = useLocation()
  console.log(location)
  return (
    <Wrapper
      key={location.pathname}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
    >
      <GlobalStyle />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  )
}
export default PageLayout
