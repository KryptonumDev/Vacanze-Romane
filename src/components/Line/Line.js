import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const LineStyles = styled(motion.span)`
  height: ${({ height }) => (height ? height : "1px")};
  background-color: ${({ bg }) => (bg ? bg : "var(--brown)")};
  width: ${({ width }) => (width ? width : "100%")};
  @media only screen and (max-width: 798px) {
    width: 100%;
    margin: 11px 0 23px;
  }
  margin: ${({ margin }) => (margin ? margin : "25px 0 50px")};
`

const Line = ({ margin, width, height, bg }) => (
  <LineStyles margin={margin} width={width} height={height} bg={bg} />
)

export default Line
