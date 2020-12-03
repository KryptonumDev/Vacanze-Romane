import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const FlexStyles = styled(motion.div)`
  display: flex;
  width: ${({ width }) => (width ? width : "")};
`

const Flex = ({
  children,
  dir,
  justifyContent,
  alignItems,
  margin,
  padding,
  width,
}) => {
  return (
    <FlexStyles
      dir={dir}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      width={width}
    >
      {children}
    </FlexStyles>
  )
}

export default Flex
