import React from "react"
import styled from "styled-components"

export default function Text({ data: { title, content } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title{
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .text *{
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
  }
`