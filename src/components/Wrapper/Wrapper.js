import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  overflow: hidden;
`

const Wrapper = ({ children, margin }) => {
  return <StyledWrapper margin={margin}>{children}</StyledWrapper>
}

export default Wrapper
