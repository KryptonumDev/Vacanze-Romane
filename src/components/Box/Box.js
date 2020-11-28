import React from "react"
import styled from "styled-components"

const BoxStyles = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => (dir ? dir : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
`

const Box = ({
  children,
  dir,
  justifyContent,
  alignItems,
  margin,
  padding,
}) => {
  return (
    <BoxStyles
      dir={dir}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
    >
      {children}
    </BoxStyles>
  )
}

export default Box
