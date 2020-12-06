import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
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
`

export default GlobalStyle
