import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  z-index: 1;
  transition: background-color 0.35s 0.05s cubic-bezier(0.77, 0, 0.175, 1),
    color 0.35s 0.05s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.35s ease-in-out;
  z-index: 1;
  mix-blend-mode: overlay;
  transform: translate3d(0, 0, 2px);
  &:hover {
    background-color: #fff;
    color: #000;
    transform: translate3d(-40px, 0, 0);
  }
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
