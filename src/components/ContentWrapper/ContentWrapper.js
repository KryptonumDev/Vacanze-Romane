import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
  margin: 20px 35px 0 25px;
`
const ContentWrapper = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

export default ContentWrapper
