import React from "react"
import { StructuredText } from "react-datocms/structured-text"
import { styled } from "styled-components"

export const PrivacyContent = ({ data }) => {
  return (
    <Wrapper>
      <StructuredText data={data} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 750px;
  margin: clamp(28px, calc(48vw/7.68), 96px) auto;
  display: grid;
  gap: 24px;
  padding: 0 105px;
  box-sizing: content-box;
  @media (max-width: 1051px) {
    padding: 0 65px;
  }

  @media (max-width: 798px) {
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }

  hr{
    display: block;
    width: 100%;
    border-color: rgba(50, 37, 29, 0.50);
  }

  h2{
    font-size: clamp(24px, calc(30vw/7.68), 36px);
    font-family: 'Cormorant Garamond';
    font-weight: 400;
    line-height: 111%;
    letter-spacing: 1px;
  }

  p{
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
  }

  h3{
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: 5px;
    text-transform: uppercase;
    width: 100%;
    margin-bottom: -8px;
  }

  >*  {
    max-width: 632px;
    margin: 0 auto;

    &:nth-child(1){
      max-width: unset;
      text-align: center;
    }
    &:nth-child(2){
      max-width: unset;
      text-align: center;
      margin-bottom: 24px;

      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
`