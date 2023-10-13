import React from "react"
import styled from "styled-components"
import Check from '../../assets/images/check.svg'

export default function TwoColumnList({ data: { title, text, list, subTitle } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="text" dangerouslySetInnerHTML={{ __html: text }} />
      <ul className="list">
        {list?.map(item => (
          <li dangerouslySetInnerHTML={{ __html: item.text }} />
        ))}
      </ul>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: subTitle }} />
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

  .text{
    margin-top: 16px;
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
  }

  .list{
    margin: 36px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 32px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
    
    li{
      list-style: none;
      padding-left: 52px;
      position: relative;
      font-size: 15px;
      line-height: 160%;
      letter-spacing: 1px;

      &::before{
        content: url(${Check});
        position: absolute;
        left: 0;
        top: 0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--dark-red, #661120);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
      }
    }
  }
`