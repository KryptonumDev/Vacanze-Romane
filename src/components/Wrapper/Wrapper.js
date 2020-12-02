import styled from "styled-components"
import { ImageWrapper, Overlay } from "../../assets/styles/HomeStyles"

export const Wrapper = styled.div`
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
      : ""};
  ${Overlay} {
    margin-top: ${({ gap }) => gap};
  }
`
