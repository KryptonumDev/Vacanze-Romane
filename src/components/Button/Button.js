import React from "react"
import styled, { css } from "styled-components"

const ButtonStyles = styled.button`
  font-size: 24px;
  line-height: 1.08em;
  letter-spacing: 1px;
  color: var(--dead-green);
  font-weight: 400;
  margin: ${({ margin }) => margin};
  background-color: var(--beige-2);
  padding: 20px 32px;
  border: none;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    color: var(--beige-2);
    background-color: var(--dead-green);
    .arrow--right {
      transform: translateX(6px);
    }
    .arrow--left {
      transform: translateX(-6px);
    }
  }

  ${({ bg }) =>
    bg === "green" &&
    css`
      background-color: var(--dead-green);
      color: var(--beige-2);
      &:hover {
        color: var(--dead-green);
        background-color: var(--beige-2);
      }
    `}

  span {
    font-size: 24px;
    font-family: "Homemade Apple";
  }

  .arrow {
    display: inline-block;
    font-size: 32px;
    transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    &--right {
      margin-left: 30px;
    }
    &--left {
      margin-right: 30px;
    }
  }
`

const Button = ({ margin, text, decorText, bg, arrowRight, arrowLeft }) => {
  return (
    <ButtonStyles margin={margin} type="button" bg={bg}>
      <span>{decorText}</span>
      {arrowLeft && <span className="arrow arrow--left">←</span>}
      {text}
      {arrowRight && <span className="arrow arrow--right">→</span>}
    </ButtonStyles>
  )
}

export default Button
