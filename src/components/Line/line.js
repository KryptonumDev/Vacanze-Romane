import React from "react"
import styled from "styled-components"

const StyledLine = styled.span`
  width: ${({ width }) => (width ? width : "250vw")};
  height: ${({ height }) => (height ? height : "4px")};
  background-color: ${({ color }) => (color ? color : "#000")};
  position: relative;
  left: 0;
`

const Line = ({ width, height, color }) => {
  return <StyledLine />
}

export default Line
