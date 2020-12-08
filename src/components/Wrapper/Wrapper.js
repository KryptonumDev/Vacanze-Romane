import { motion } from "framer-motion"
import styled from "styled-components"
import { ImageWrapper, Overlay } from "../../assets/styles/HomeStyles"

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  position: relative;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? padding : "50px 0 0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding-top: ${({ gap }) => gap};
  background-color: ${({ bg }) =>
    bg === "light"
      ? "var(--bg-home)"
      : bg === "red"
      ? "var(--dark-red)"
      : bg === "green"
      ? "var(--dead-green)"
      : bg === "brown"
      ? "var(--brown)"
      : bg === "white"
      ? "var(--white)"
      : bg === "blue"
      ? "var(--blue)"
      : ""};
  ${Overlay} {
    margin-top: ${({ gap }) => gap};
    @media only screen and (max-width: 798px) {
      margin-top: 0;
    }
  }
`
