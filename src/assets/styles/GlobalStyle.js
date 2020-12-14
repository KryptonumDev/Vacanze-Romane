import React from "react"
import { createGlobalStyle } from "styled-components"
import { useMenuState } from "../../components/contexts/mobileMenuContext"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    --bg-home: #fefbf5;
    --bg-top: #f8f5f1;
    --dead-green: #143325;
    --light-green: #2a4536;
    --dark-red: #661120;
    --light-red #7b2938;
    --brown: #32251d;
    --light-brown: #4a392e;
    --blue: #110f58;
    --light-blue: #262478;
    --beige-2: #f1e2cc;
    --black: #000;
    --brownOp: rgba(50,37,29,0.5);
    --gray: #999;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato';
    position: ${({ fixed }) => fixed && "fixed"};
  }
  button {
    cursor: pointer;
    font-family: 'Lato';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  .ciao {
    font-size: 96px;
    letter-spacing: 1px;
    line-height: 0.73em;
    color: var(--dark-red);
    font-family: "Homemade Apple";
    margin-top: 16px;
    @media only screen and (max-width: 1160px) {
      font-size: 80px;
    }
    @media only screen and (max-width: 1032px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 798px) {
      font-size: 72px;
      text-align: center;
    }
  }
  .decor {
    font-family: "Homemade Apple";
  }
  p::selection, span::selection, h1::selection, h2::selection, h3::selection, input::selection, button::selection {
    background-color: var(--dark-red);
    color: var(--beige-2);
  }
  img::selection {
    background-color: transparent;
  }
  .scroll-to-top {
    background-color: var(--black);
    right: 30px;
    bottom: 30px;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: opacity 1s ease-in-out;
    border: none;
    outline: none;
    transition: transform .2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:hover {
      transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    }
    &:focus, &:active {
      transform: matrix(0.9, 0, 0, 0.9, 0, 0);
    }

    @media only screen and (max-width: 798px) {
      right: 20px;
      bottom: 20px;
      width: 28px;
      height: 28px;
      svg {
        width: 22px !important;
        height: 22px !important;
      }
    }
  }
`

const GlobalStyle = () => {
  const { show } = useMenuState()
  return <GlobalStyles fixed={show} />
}

export default GlobalStyle
