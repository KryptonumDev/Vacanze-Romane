import React from "react"
import styled from "styled-components"
import { Flex } from "../../assets/styles/HomeStyles"

const PageLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 2px;
    width: 100%;
    background-color: var(--brown);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: left center;
    transform: ${({ page, length }) => `scaleX(${page / (length - 1)})`};
  }
`
const Pagination = ({ page = 0, setPage, length = 1 }) => {
  const handleIncrease = () => setPage(Math.min(page + 1, length - 1))

  const handleDecrease = () => setPage(Math.max(page - 1, 0))

  return (
    <Flex dir="column" margin="90px 0 0">
      <PageLine page={page} length={length} />
      <Flex>
        <button
          disabled={page === 0}
          onClick={() => handleDecrease()}
          type="button"
        >
          &larr;
        </button>
        <button
          disabled={page === length - 1}
          onClick={() => handleIncrease()}
          type="button"
        >
          <svg
            width="31"
            height="16"
            viewBox="0 0 31 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
              fill="black"
            ></path>
          </svg>
        </button>
        {page}
      </Flex>
    </Flex>
  )
}

export default Pagination
