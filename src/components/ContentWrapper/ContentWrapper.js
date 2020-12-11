import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const StyledMain = styled(motion.main)``
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
            duration: 0.2,
          },
        },
      }}
    >
      {children}
    </StyledMain>
  )
}

export default ContentWrapper
