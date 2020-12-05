import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { useSearchDispatch, useSearchState } from "../contexts/searchContext"
import { RiSearchLine } from "react-icons/ri"
import { CgArrowLongRight } from "react-icons/cg"
import { IoClose } from "react-icons/io5"
import { Flex } from "../../assets/styles/HomeStyles"

const SearchStyles = styled(motion.button)`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: inline-block;
  svg {
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    svg {
      transform: scale(1.1) translateX(-1px);
    }
  }
`

const SearchModal = styled(motion.div)`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .btn--close {
    position: absolute;
  }
`

const StyledFlex = styled(Flex)`
  border: 2px solid black;
  align-self: center;
  width: 577px;
  max-width: 80%;
`

const Search = ({ bg }) => {
  const [active, setActive] = useState(false)
  const { query } = useSearchState()
  const dispatch = useSearchDispatch()

  return (
    <>
      <SearchStyles>
        <RiSearchLine size="26px" color="var(--beige-2)" />
      </SearchStyles>
      <SearchModal>
        <StyledFlex>
          <Flex flexDirection="column">
            <motion.input />
            <motion.button className="btn--search">
              <CgArrowLongRight size="50px" color="var(--beige-2)" />
            </motion.button>
          </Flex>
          <motion.button className="btn--close">
            <IoClose size="16px" color="var(--beige-2)" />
          </motion.button>
        </StyledFlex>
      </SearchModal>
    </>
  )
}

export default Search
