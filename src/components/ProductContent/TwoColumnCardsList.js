import React from "react"
import styled from "styled-components"
import Arrow from '../../assets/images/arrow-right.svg'

export default function TwoColumnCards({ data: { title, text, list } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="text" dangerouslySetInnerHTML={{ __html: text }} />
      <ul className={"list" + list.length > 1 ? ' columns' : ''}>
        {list.map(item => (
          <li>
            <h4>{item.title}</h4>
            <p className="price">{item.price}</p>
            <ul>
              {item?.list?.map(item => (
                <li dangerouslySetInnerHTML={{ __html: item.text }} />
              ))}
            </ul>
            {(item.file && item.linkTitle) && (
              <Button target="_blank" rel="noopener noreferrer" href={item.file.mediaItemUrl} download>
                {item.linkTitle}
              </Button>
            )}
          </li>
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

  .text{
    margin-top: 16px;
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
  }

  .list{
    margin: 36px 0 0 0;
    display: grid;
    gap: 24px;

    &.columns{
      grid-template-columns: 1fr 1fr;

      @media (max-width: 1240px) {
        grid-template-columns: 1fr;
      }

      @media (max-width: 964px) {
        grid-template-columns: 1fr 1fr;
      } 

      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }
      
    >li{
      list-style: none;
      position: relative;
      border: 1px solid var(--grey, #E0E0E0);
      padding: 16px;


      .price{
        margin-top: 8px;
      }

      ul{
        display: grid;
        gap: 16px;
        margin: 24px 0;

        li{
          list-style: none;
          padding-left: 40px;
          position: relative;
          font-size: 15px;
          line-height: 160%;
          letter-spacing: 1px;

          &::before{
            content: url(${Arrow});
            position: absolute;
            left: 0;
            top: 0;
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
    }
  }
`

const Button = styled.a`
  display: block;
  margin-top: 24px;
  background: var(--dead-green, #143325);
  padding: 16px 32px;
  color: var(--beige-2, #F1E2CC);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;
  cursor: pointer;
  width: 100%;

  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--beige-2);
    background-color: var(--brown);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`