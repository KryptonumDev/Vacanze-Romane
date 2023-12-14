import React, { useMemo } from "react"
import styled from "styled-components"

// urlBasis = '/blog/'
const PAGE_ITEM_COUNT = 6

export default function Pagination({ page: currentPage, length: itemCount, setPage: changeCurrentPage }) {
  const pagesCount = useMemo(() => {
    return (Math.ceil(itemCount / PAGE_ITEM_COUNT))
  }, [itemCount])

  const buttons = useMemo(() => {
    let arr = []
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pagesCount])

  if (pagesCount < 2) {
    return null
  }

  return (
    <Wrapper>
      <Button disabled={currentPage <= 1} onClick={() => { changeCurrentPage(currentPage - 1) }} className='arrow left' >
        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.439339 10.9393C-0.146446 11.5251 -0.146446 12.4749 0.439339 13.0607L9.98528 22.6066C10.5711 23.1924 11.5208 23.1924 12.1066 22.6066C12.6924 22.0208 12.6924 21.0711 12.1066 20.4853L3.62132 12L12.1066 3.51472C12.6924 2.92893 12.6924 1.97919 12.1066 1.3934C11.5208 0.807611 10.5711 0.807611 9.98528 1.3934L0.439339 10.9393ZM48.5 10.5H1.5V13.5H48.5V10.5Z" fill="#32251D" />
        </svg>
      </Button>
      <div className="center">
        {pagesCount < 6 ? (
          <>
            {buttons.map(el => (
              <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el} >
                {el}
              </Button>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3
              && <Button onClick={() => { changeCurrentPage(1) }} >
                {1}
              </Button>
            }
            {currentPage > 4
              && <Button className="not" disabled>
                ...
              </Button>
            }

            {buttons.map((el, index) => {
              if (currentPage < 4 && (index < 6)) { // first 4 pages
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              if (currentPage > pagesCount - 3 && (index > pagesCount - 7)) { // last 4 pages
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) {
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              return null
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3)
              && <Button className="not" disabled>
                ...
              </Button>
            }
            {(currentPage === 1 || pagesCount - currentPage > 2)
              && (
                <Button onClick={() => { changeCurrentPage(pagesCount) }}>
                  {pagesCount}
                </Button>
              )}
          </>
        )}
      </div>
      <Button disabled={currentPage >= pagesCount} onClick={() => { changeCurrentPage(currentPage + 1) }} className='arrow right'>
        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.5607 10.9393C49.1464 11.5251 49.1464 12.4749 48.5607 13.0607L39.0147 22.6066C38.4289 23.1924 37.4792 23.1924 36.8934 22.6066C36.3076 22.0208 36.3076 21.0711 36.8934 20.4853L45.3787 12L36.8934 3.51472C36.3076 2.92893 36.3076 1.97919 36.8934 1.3934C37.4792 0.807611 38.4289 0.807611 39.0147 1.3934L48.5607 10.9393ZM0.5 10.5H47.5V13.5H0.5V10.5Z" fill="#32251D" />
        </svg>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 540px) {
    gap: 8px;
  }
 
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 540px) {
      gap: 8px;
    }
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  width: 44px;
  height: 44px;
  color: var(--brown, #32251D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  border: 1px solid transparent;
  transition: border-color .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  ${props => props.active && `
    border: 1px solid var(--dark-red, #661120);
    cursor: default;
    &::after{
      display: none;
    }
  `}

  &::after{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 6px;
    background-color: #F1E2CC;
    opacity: 0;
    transition: opacity .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: -1;
  }

  &:hover{
    &::after{
      opacity: 1;
    }
  }

  &.not{
    cursor: default;
  }
 
  &.arrow{
    background: #23423D;
    padding: 6px 0;
    width: 64px;
    background-color: transparent;

    @media (max-width: 540px) {
      width: 44px;
    }
    
    &::after{
      display: none;
    }

    svg{
      transition: transform .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    path{
      transition: fill .3s cubic-bezier(0.785, 0.135, 0.15, 0.86)
    }

    &.left{
      &:hover{
        svg{
          transform: translateX(-12px);
        }
      }
    }

    &.right{
      &:hover{
        svg{
          transform: translateX(12px);
        }
      }
    }
  }

  &:disabled{
    cursor: default;

    svg{
      transform: unset !important;
    }
    path{
      fill: #E0E0E0
    }
  }
`
