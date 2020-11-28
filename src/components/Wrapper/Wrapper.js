import styled from "styled-components"
import { Overlay } from "../../assets/styles/HomeStyles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  position: relative;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? padding : "50px 0 0")};
  padding-top: ${({ gap }) => gap};
  background-color: ${({ bg }) => (bg === "light" ? "var(--bg-home)" : "")};
  ${Overlay} {
    margin-top: ${({ gap }) => gap};
  }
  ${ImageWrapper} {
    top: ${({ gap }) => gap && `calc(50% + 71px`};
  }
`
