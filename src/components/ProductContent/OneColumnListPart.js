import React from "react"
import styled from "styled-components"
import Arrow from '../../assets/images/arrow-right.svg'

export default function OneColumnList({ data: { title, list } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <ul className="list">
        {list?.map(item => (
          <li dangerouslySetInnerHTML={{ __html: item.text }} />
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title{
    margin-top: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .list{
    margin: 16px 0;
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