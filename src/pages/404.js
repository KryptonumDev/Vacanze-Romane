import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 102px;
  h3 {
    font-size: 32px;
    font-family: "Cormorant Garamond";
  }
  p {
    font-size: 18px;
    font-family: "Lato";
    margin-top: 16px;
  }
`
const NotFoundPage = () => (
  <StyledWrapper>
    <div>
      <h3>Nie znaleziono</h3>
      <p>Ta strona nie istnieje.</p>
    </div>
  </StyledWrapper>
)

export default NotFoundPage
