import { motion } from "framer-motion"
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
    transform: ${({ page, length }) =>
      length > 1
        ? `scaleX(${page / (length - 1)})`
        : `scaleX(${page / length})`};
  }
`

const ButtonStyles = styled(Flex)`
  margin-top: 16px;
  button {
    font-size: 40px;
    line-height: 1em;
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    transition: color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:nth-child(1) {
      margin-right: 48px;
    }

    &:focus {
      outline: none;
    }
  }
`
const Pagination = ({ page = 0, setPage, length = 1 }) => {
  const handleIncrease = () =>
    setPage(
      length > 1 ? Math.min(page + 1, length - 1) : Math.min(page + 1, length)
    )

  const handleDecrease = () => setPage(Math.max(page - 1, 0))

  return (
    <Flex width="100%" flexDirection="column" margin="90px 0 0">
      <PageLine page={page} length={length} />
      <ButtonStyles>
        <motion.button
          disabled={page === 0}
          whileHover={page !== 0 && { x: -2 }}
          whileTap={page !== 0 && { x: -4 }}
          onClick={page !== 0 ? handleDecrease : undefined}
          type="button"
        >
          &larr;
        </motion.button>
        <motion.button
          disabled={page >= length - 1}
          onClick={page < length - 1 ? handleIncrease : undefined}
          type="button"
          whileHover={page < length - 1 && { x: 2 }}
          whileTap={page < length - 1 && { x: 4 }}
        >
          &rarr;
        </motion.button>
      </ButtonStyles>
    </Flex>
  )
}

export default Pagination
