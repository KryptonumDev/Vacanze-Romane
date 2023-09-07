import React from "react"
import { styled } from "styled-components"

export default function Summary() {
  return (
    <Wrapper>
      <h2>Podsumowanie</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: fit-content;
  padding: 24px;
  border: 1px solid var(--grey, #E0E0E0);
  background: var(--white, #FEFEFE);

  h2{
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Cormorant Garamond';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
    margin-bottom: 48px;
  }
`