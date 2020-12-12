import { motion } from "framer-motion"
import React from "react"
import styled, { css } from "styled-components"

const ButtonStyles = styled(motion.button)`
  font-size: 24px;
  line-height: 1.08em;
  letter-spacing: 1px;
  color: var(--dead-green);
  font-weight: 400;
  margin: ${({ margin }) => margin};
  background-color: var(--beige-2);
  padding: ${({ shorter }) => (shorter ? "16px 32px" : "19px 32px")};
  min-width: 223px;
  border: 2px solid transparent;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  @media only screen and (max-width: 798px) {
    font-size: 15px;
    padding: ${({ shorter }) => (shorter ? "13px 10px" : "14px 10px")};

    min-width: 142px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        color: var(--beige-2);
        background-color: var(--dead-green);
        .arrow--right {
          transform: translateX(6px);
        }
        .arrow--left {
          transform: translateX(-6px);
        }
      `}
  }

  ${({ bg, disabled }) =>
    bg === "green" &&
    css`
      background-color: var(--dead-green);
      color: var(--beige-2);
      &:hover,
      &:focus,
      &:active {
        outline: none;
        color: ${({ disabled }) =>
          disabled ? "var(--beige-2)" : "var(--dead-green)"};
        background-color: ${({ disabled }) =>
          disabled ? "var(--dead-green)" : "var(--beige-2)"};
      }
    `}

  ${({ transparentBg, disabled }) =>
    transparentBg &&
    !disabled &&
    css`
      &:hover,
      &:focus,
      &:active {
        outline: none;
        border: 2px solid var(--beige-2);
      }
    `}

  span {
    font-size: 24px;
    font-family: "Homemade Apple";
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    font-size: 32px;
    transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    &--right {
      margin-left: 30px;
    }
    &--left {
      margin-right: 30px;
    }
  }
  @media only screen and (max-width: 798px) {
    span {
      font-size: 16px;
    }

    .arrow {
      display: inline-block;
      font-size: 20px;
      transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
      &--right {
        margin-left: 8px;
      }
      &--left {
        margin-right: 8px;
      }
    }
  }
`

const Button = ({
  margin,
  text,
  decorText,
  bg,
  arrowRight,
  arrowLeft,
  transparentBg,
  shorter,
  disabled,
}) => {
  return (
    <ButtonStyles
      shorter={shorter}
      margin={margin}
      type="button"
      disabled={disabled}
      bg={bg}
      transparentBg={transparentBg}
      whileTap={!disabled && { scale: 0.9 }}
    >
      <span>{decorText}</span>
      {arrowLeft && <span className="arrow arrow--left">←</span>}
      {text}
      {arrowRight && <span className="arrow arrow--right">→</span>}
    </ButtonStyles>
  )
}

export default Button
