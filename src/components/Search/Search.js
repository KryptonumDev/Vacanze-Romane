import { AnimatePresence, motion } from "framer-motion"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { useSearchDispatch, useSearchState } from "../contexts/searchContext"
import { RiSearchLine } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { Flex } from "../../assets/styles/HomeStyles"
import { fadeOutAnimation, itemAnimation, listAnimation } from "../animations"
import { useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"

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
    right: 52px;
    top: 0;
    background-color: var(--brown);
    transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      background-color: var(--dark-red);
    }
  }
  .btn--search {
    width: 76px;
    height: 100%;
    background-color: var(--brown);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 34px 8px 34px 12px;
    border: none;
    transition: background-color 0.2 cubic-bezier(0.55, 0.085, 0.68, 0.53);

    &:focus,
    &:active,
    &:hover {
      outline: none;
      background-color: var(--dark-red);
    }
  }

  input {
    padding: 34px 29px;
    font-family: "Cormorant Garamond";
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: 1px;
    color: var(--light-brown);
    background-color: var(--bg-top);
    border-color: transparent;
    width: 100%;
    transition: border-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    border: 1px solid
      ${({ error }) => (error ? "var(--light-red)" : "transparent")};

    &:focus,
    &:active,
    &:hover {
      border: 1px solid
        ${({ error }) => (error ? "var(--light-red)" : "var(--brown)")};
      outline: none;
    }
  }
`

const StyledFlex = styled(Flex)`
  align-self: center;
  width: 1440px;
  padding: 145px 52px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
`

const StyledMessage = styled(motion.p)`
  font-family: "Lato";
  font-size: 18px;
  line-height: 1.44em;
  position: absolute;
  bottom: 80px;
  text-align: center;
  color: var(--dark-red);
`

const Search = ({ bg }) => {
  const [active, setActive] = useState(false)
  const { query } = useSearchState()
  const dispatch = useSearchDispatch()
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  const pathname = useLocation().pathname

  const inputRef = useRef()

  const minimalLengthOfQuery = 3
  const handleSearch = () => {
    console.log("query: ", query)
    if (query.length >= minimalLengthOfQuery) {
      setActive(false)
      navigate("/szukaj")
      setMessage(null)
      setError(false)
    } else {
      setMessage(
        `Wprowadź tekst o długości co najmniej ${minimalLengthOfQuery} znaków.`
      )
      setError(true)
      inputRef.current.focus()
    }
  }

  const handleChange = e => {
    dispatch({ type: "SET_QUERY", payload: e.target.value })
    if (e.target.value.length >= minimalLengthOfQuery) {
      setMessage(null)
    }
  }

  const handleClose = () => {
    setActive(false)
  }

  const handleOpenModal = () => {
    setActive(true)
  }

  const escPress = e => {
    if (e.keyCode === 27) {
      setActive(false)
      setMessage(null)
    }
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  useEffect(() => {
    document && document.addEventListener("keydown", escPress, false)
    return function cleanup() {
      document.removeEventListener("keydown", escPress, false)
    }
  }, [])

  return (
    <>
      <SearchStyles type="button" onClick={handleOpenModal}>
        <RiSearchLine size="26px" color="var(--beige-2)" />
      </SearchStyles>
      <AnimatePresence>
        {active && (
          <SearchModal
            variants={fadeOutAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <StyledFlex
              key="wrapper"
              variants={listAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Flex
                alignItems="stretch"
                flexDirection="row"
                key="input-wrapper"
                width="100%"
                maxWidth="580px"
                variants={itemAnimation}
              >
                <motion.input
                  ref={inputRef}
                  key="input"
                  placeholder="Wyszukaj"
                  value={query}
                  onChange={e => handleChange(e)}
                  error={message !== null}
                  autoFocus
                />
                <motion.button
                  key="input-btn"
                  className="btn--search"
                  onClick={handleSearch}
                >
                  <BsArrowRight size="36px" color="var(--beige-2)" />
                </motion.button>
              </Flex>
              <motion.button
                className="btn--close"
                type="button"
                onClick={handleClose}
                key="close-btn"
                variants={itemAnimation}
              >
                <IoClose size="26px" color="var(--beige-2)" />
              </motion.button>
              {message && (
                <StyledMessage variants={itemAnimation}>
                  {message}
                </StyledMessage>
              )}
            </StyledFlex>
          </SearchModal>
        )}
      </AnimatePresence>
    </>
  )
}

export default Search
