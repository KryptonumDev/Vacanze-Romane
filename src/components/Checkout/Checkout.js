import React from "react"
import styled from "styled-components"
import Form from "./Form"
import Summary from "./Summary"

export default function Checkout() {
  return (
    <Wrapper>
      <div className="container">
        <Form />
        <Summary />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #F8F5F1;
  .container{
    display: grid;
    grid-template-columns: 564fr 458fr;
    gap: 106px;
    max-width: 1440px;
    padding: 72px 100px;
    margin: 0 auto;

    @media (max-width: 1051px) {
      padding: 54px 65px;
    }

    @media (max-width: 798px) {
      padding: 36px 30px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
    }

    @media (max-width: 967px) {
      flex-direction: column;
    }
  }
`