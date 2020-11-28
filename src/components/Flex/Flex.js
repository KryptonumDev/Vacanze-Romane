import React from "react"
import styled from "styled-components"

const FlexStyles = styled.div`
  display: flex;
`

const Flex = ({
  children,
  dir,
  justifyContent,
  alignItems,
  margin,
  padding,
}) => {
  return (
    <FlexStyles
      dir={dir}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
    >
      {children}
    </FlexStyles>
  )
}

export default Flex
