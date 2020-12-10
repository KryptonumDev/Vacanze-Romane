import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import React, { useRef, useState } from "react"
import styled, { css } from "styled-components"
import { useSearchDispatch, useSearchState } from "../contexts/searchContext"
import { RiSearchLine } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { Flex } from "../../assets/styles/HomeStyles"
import { fadeOutAnimation, itemAnimation, listAnimation } from "../animations"
import { useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { useMenuDispatch, useMenuState } from "../contexts/mobileMenuContext"

const SearchStyles = styled(motion.button)`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: inline-block;
  pointer-events: ${({ mobileSearchShown }) => mobileSearchShown && "none"};
  @media only screen and (min-width: 1106px) {
    &.mobile {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
  }
  @media only screen and (max-width: 1105px) {
    margin-top: 20px;
    &.desktop {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
  }

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

  ${({ mobile }) =>
    mobile &&
    css`
      display: inline-flex;
      align-items: center;
      font-size: 18px;
      color: var(--beige-2);
    `}
`

const SearchModal = styled(motion.div)`
  display: flex;
  position: ${({ className }) => (className !== "mobile" ? "fixed" : "")};
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: ${({ className }) =>
    className !== "mobile" ? "#fff" : "transparent"};
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media only screen and (max-width: 1105px) {
    margin-top: 32px;
    width: 85%;
    max-width: 340px;
    &.desktop {
      display: none;
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 90%;
  }
  @media only screen and (min-width: 1106px) {
    &.mobile {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
  }
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
    color: var(--beige-2);

    &:hover,
    &:focus,
    &:active {
      outline: none;
      background-color: var(--dark-red);
    }

    @media only screen and (max-width: 1105px) {
      right: -12px;
      background-color: transparent;
      color: ${({ bg }) =>
        bg === "light" ? "var(--brown)" : "var(--beige-2)"};
      &:hover,
      &:focus,
      &:active {
        outline: none;
        background-color: transparent;
      }
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
    color: var(--beige-2);
    &:focus,
    &:active,
    &:hover {
      outline: none;
      background-color: var(--dark-red);
    }

    @media only screen and (max-width: 1105px) {
      padding: 9px 4px;
      width: 48px;
      justify-content: center;
      height: 42px;
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "blue"
          ? "var(--light-blue)"
          : bg === "brown"
          ? "var(--light-brown)"
          : "var(--beige-2)"};

      &:focus,
      &:active,
      &:hover {
        outline: none;
        background-color: ${({ bg }) =>
          bg === "red"
            ? "var(--dark-red)"
            : bg === "green"
            ? "var(--dead-green)"
            : bg === "blue"
            ? "var(--blue)"
            : bg === "brown"
            ? "var(--brown)"
            : "var(--beige-2)"};
      }
    }
  }

  input {
    padding: 34px 29px;
    font-family: "Cormorant Garamond";
    font-size: 20px;
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

    @media only screen and (max-width: 1105px) {
      padding: 8px 13px;
      font-family: "Lato";
      font-size: 15px;
      line-height: 1.6;
      letter-spacing: 1px;
      color: ${({ bg }) =>
        bg === "light" ? "var(--brown)" : "var(--beige-2)"};
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "blue"
          ? "var(--light-blue)"
          : bg === "brown"
          ? "var(--light-brown)"
          : "var(--beige-2)"};
      &:focus,
      &:active,
      &:hover {
        border: 1px solid transparent;
        outline: none;
      }
      &::placeholder {
        color: ${({ bg }) =>
          bg === "light" ? "var(--brown)" : "var(--beige-2)"};
      }
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

  @media only screen and (max-width: 1440px) {
    width: 90%;
    padding: 120px 0 80px;
  }
`

const StyledMessage = styled(motion.p)`
  font-family: "Lato";
  font-size: 18px;
  line-height: 1.44em;
  position: absolute;
  bottom: 80px;
  text-align: center;
  color: var(--dark-red);
  @media only screen and (max-width: 1440px) {
    bottom: 0px;
  }
`

// const MobileStyles = styled(motion.div)`
//   ${({ mobile }) =>
//     mobile &&
//     css`
//       display: flex;
//       justify-content: space-between;
//       border: 2px solid black;
//       align-items: center;
//     `}
// `

const InputWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ bg }) =>
    bg === "red"
      ? "var(--light-red)"
      : bg === "green"
      ? "var(--light-green)"
      : bg === "blue"
      ? "var(--light-blue)"
      : bg === "brown"
      ? "var(--light-brown)"
      : "var(--beige-2)"};
  width: 100%;
  height: 100%;
  padding: 0;
  pointer-events: all;
  ${({ showMobileSearch }) =>
    showMobileSearch &&
    css`
      justify-content: space-between;
      max-width: 264px;
      width: 80vw;
      padding: 0 13px 0 0;
    `}

  input {
    background-color: transparent;
    font-size: 15px;
    line-height: 1.6em;
    font-family: "Lato";
    color: var(--beige-2);
    padding: 8px 13px;
    height: 42px;
    border: 1px solid
      ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "blue"
          ? "var(--light-blue)"
          : bg === "brown"
          ? "var(--light-brown)"
          : "var(--beige-2)"};
    transition: border-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:focus,
    &:active {
      outline: none;
      border: 1px solid var(--beige-2);
    }
  }
`

const ButtonSearch = styled(motion.button)`
  border: none;
  background-color: var(--beige-2);
  width: 42px;
  height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const BtnSearchWrapper = styled(motion.div)`
  border: none;
  width: 42px;
  height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ hide }) => hide && "hidden"};
  display: ${({ hide }) => hide && "none"};
`

const Search = ({ bg, className, mobile }) => {
  const [active, setActive] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showButtonSearch, setShowButtonSearch] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const dispatch = useSearchDispatch()
  const menuDispatch = useMenuDispatch()
  const [message, setMessage] = useState(null)

  const inputRef = useRef()
  const mobileInputRef = useRef()

  const minimalLengthOfQuery = 3
  const handleSearch = async () => {
    if (inputValue.trim().length >= minimalLengthOfQuery) {
      setMessage(null)
      await dispatch({ type: "SET_QUERY", payload: inputValue })
      await menuDispatch({ type: "CLOSE_MENU" })
      navigate("/szukaj")
      setTimeout(() => {
        setActive(false)
      }, 100)
    } else {
      setMessage(
        `Wprowadź tekst o długości co najmniej ${minimalLengthOfQuery} znaków.`
      )
      if (!mobile && !showMobileSearch && active) {
        inputRef.current.focus()
      }
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value)
    if (e.target.value.trim().length >= minimalLengthOfQuery) {
      setMessage(null)
      setShowButtonSearch(true)
    } else {
      setShowButtonSearch(false)
    }
  }

  const handleClose = () => {
    setActive(false)
    setShowMobileSearch(false)
    setShowButtonSearch(false)
  }

  const handleOpenModal = () => {
    setActive(true)
  }

  const handleShowSearch = () => {
    setShowMobileSearch(true)
  }

  const handleCloseSearch = () => {
    setShowMobileSearch(false)
    setShowButtonSearch(true)
  }

  const keyPress = e => {
    console.log(inputValue, e.keyCode)
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  useEffect(() => {
    document && document.addEventListener("keydown", keyPress, false)
    return function cleanup() {
      document.removeEventListener("keydown", keyPress, false)
    }
  }, [])

  return (
    <>
      <SearchStyles
        className={className}
        type="button"
        onClick={!mobile ? handleOpenModal : handleShowSearch}
        mobile={mobile}
        mobileSearchShown={showMobileSearch}
      >
        <AnimateSharedLayout>
          <InputWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            active={showMobileSearch}
            bg={bg}
            layout
          >
            <AnimatePresence>
              {mobile && showMobileSearch && (
                <motion.input
                  key="mobileInput"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                  exit={{ opacity: 0 }}
                  placeholder="Wyszukaj"
                  value={inputValue}
                  onChange={e => handleChange(e)}
                  error={message !== null}
                  bg={bg}
                  layout
                />
              )}
              {!showButtonSearch ? (
                <BtnSearchWrapper
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                  exit={{ opacity: 0 }}
                  key="SearchLineWrapper"
                  layout
                >
                  <RiSearchLine
                    key="SearchLine"
                    size="26px"
                    color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
                  />
                </BtnSearchWrapper>
              ) : (
                <ButtonSearch
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                  exit={{ opacity: 0 }}
                  key="search-btn"
                  onClick={handleSearch}
                  bg={bg}
                >
                  <BsArrowRight
                    size="26px"
                    color={
                      bg === "green"
                        ? "var(--dead-green)"
                        : bg === "red"
                        ? "var(--dark-red)"
                        : bg === "blue"
                        ? "var(--blue)"
                        : bg === "brown"
                        ? "var(--brown)"
                        : "var(--beige-2)"
                    }
                  />
                </ButtonSearch>
              )}
            </AnimatePresence>
          </InputWrapper>
        </AnimateSharedLayout>
      </SearchStyles>
      {!mobile && (
        <AnimatePresence>
          {active && (
            <SearchModal
              className={className}
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              bg={bg}
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
                    value={inputValue}
                    onChange={e => handleChange(e)}
                    error={message !== null}
                    autoFocus
                    bg={bg}
                  />
                  <motion.button
                    key="input-btn"
                    className="btn--search"
                    onClick={handleSearch}
                  >
                    {className !== "mobile" ? (
                      <BsArrowRight size="36px" color={"var(--beige-2)"} />
                    ) : (
                      <RiSearchLine
                        size="24px"
                        color={
                          bg === "light" ? "var(--brown)" : "var(--beige-2)"
                        }
                      />
                    )}
                  </motion.button>
                </Flex>
                <motion.button
                  className="btn--close"
                  type="button"
                  onClick={handleClose}
                  key="close-btn"
                  variants={itemAnimation}
                >
                  <IoClose
                    size="26px"
                    color={
                      className !== "mobile"
                        ? "var(--beige-2)"
                        : bg === "light"
                        ? "var(--brown)"
                        : "var(--beige-2)"
                    }
                  />
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
      )}
    </>
  )
}

export default Search
