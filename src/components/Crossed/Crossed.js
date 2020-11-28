import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const CrossedStyles = styled(motion.span)`
  height: ${({ height }) => (height ? height : "1px")};
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "25px 0 50px")};

  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: -10px;
    top: 50%;
    height: 3px;
    width: calc(100% + 12px);
    background-color: ${({ bg }) => (bg ? bg : "var(--black)")};
  }
  &:before {
    content: ${({ italianText }) => `"${italianText}"`};
    font-family: "Homemade Apple";
    font-size: 36px;
    line-height: 1.11;
    letter-spacing: 1px;
    color: ${({ color }) => (color ? color : " var(--black)")};
    position: absolute;
    top: -36px;
  }
`

const Crossed = ({ margin, width, height, bg, children, italianText }) => (
  <CrossedStyles
    italianText={italianText}
    margin={margin}
    width={width}
    height={height}
    bg={bg}
  >
    {children}
  </CrossedStyles>
)

export default Crossed
