import React from "react"
import styled from "styled-components"
import Arrow from '../../assets/images/arrow-right.svg'

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

  ul{
    margin-top: 16px;
    display: grid;
    gap: 16px;
    
    li{
      list-style: none;
      padding-left: 40px;
      position: relative;
      font-size: 15px;
      line-height: 160%;
      letter-spacing: 1px;

      *{
        font-size: 15px;
        line-height: 160%;
        letter-spacing: 1px;
      }

      &::before{
        content: url(${Arrow});
        position: absolute;
        left: 0;
        top: 2px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--light-green, #2A4536);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
      }
    }
  }
`