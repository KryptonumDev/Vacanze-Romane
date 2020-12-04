import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const CrossedStyles = styled(motion.span)`
  display: inline-block;
  margin: ${({ margin }) => (margin ? margin : "0")};

  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: -10px;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    height: 3px;
    width: calc(100% + 12px);
    background-color: ${({ bg }) => (bg ? bg : "var(--black)")};
  }
  &:before {
    content: ${({ italianText }) => `"${italianText}"`};
    font-family: "Homemade Apple";
    font-size: ${({ decorSize }) => (decorSize ? decorSize : "36px")};
    line-height: 1.11;
    letter-spacing: 1px;
    color: ${({ bg }) => (bg ? bg : " var(--black)")};
    position: absolute;
    top: ${({ textTop }) => textTop};
    bottom: ${({ textBottom }) => textBottom};
    left: ${({ textLeft }) => textLeft};
    right: ${({ textRight }) => textRight};
    width: 100vw;
  }
`

const Crossed = ({
  margin,
  width,
  height,
  bg,
  children,
  italianText,
  top,
  textTop,
  left,
  right,
  bottom,
  textBottom,
  textLeft,
  textRight,
  decorSize,
}) => (
  <CrossedStyles
    italianText={italianText}
    margin={margin}
    width={width}
    height={height}
    bg={bg}
    top={top}
    textTop={textTop}
    textBottom={textBottom}
    bottom={bottom}
    left={left}
    textRight={textRight}
    textLeft={textLeft}
    right={right}
    decorSize={decorSize}
  >
    {children}
  </CrossedStyles>
)

export default Crossed
