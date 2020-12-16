import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const StyledMain = styled(motion.main)``
const ContentWrapper = ({ children }) => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledMain
        key={location.pathname}
        initial={location.pathname !== "/" ? "pageInitial" : false}
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 16,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: [0.39, 0.575, 0.565, 1],
            },
          },
          pageHomeInitial: {
            opacity: 0,
          },
          pageHomeAnimate: {
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: [0.39, 0.575, 0.565, 1],
            },
          },
          pageExit: {
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.39, 0.575, 0.565, 1],
            },
          },
        }}
      >
        {children}
      </StyledMain>
    </AnimatePresence>
  )
}

export default ContentWrapper
