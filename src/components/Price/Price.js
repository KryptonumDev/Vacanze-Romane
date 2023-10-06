import React, { useMemo } from "react"
import styled from "styled-components"

export default function Price({ price, regularPrice }) {

  return (
    <Wrapper className="price">
      {price === regularPrice ? (
        <p>
          {price || 0}&nbsp;zł
        </p>
      ) : (
        <p>
          <span>{price}&nbsp;zł</span> <strike>{regularPrice}&nbsp;zł</strike>
        </p>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`

  p{
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 1px;
    span{
      color: #7B2938;
    }

    strike{
      color: var(--grey-1, #808080);
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Lato;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 14.5px;
      letter-spacing: 5px;
      text-decoration-line: strikethrough;
      text-transform: uppercase;
    }
  }
`