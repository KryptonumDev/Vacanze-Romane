import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const StyledMain = styled(motion.main)`
  margin: 20px 35px 0 25px;
`
const ContentWrapper = ({ children }) => {
  const location = useLocation()
  return (
    <StyledMain
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
      {children}
    </StyledMain>
  )
}

export default ContentWrapper
