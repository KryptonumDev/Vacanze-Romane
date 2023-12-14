import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../../assets/styles/HomeStyles"
import { PageHeaderStyles } from "../PageHeaderNav/PageHeaderNav"
import { Wrapper } from "../Wrapper/Wrapper"

const NavStyles = styled.li`
  margin-right: 103px;
  @media only screen and (max-width: 1250px) {
    margin-right: 88px;
    &:last-child {
      margin-right: 0 !important;
    }
  }
  @media only screen and (max-width: 1131px) {
    margin-right: 60px !important;
    &:last-child {
      margin-right: 0 !important;
    }
  }
  @media only screen and (max-width: 1006px) {
    margin-right: 40px !important;
    &:last-child {
      margin-right: 0 !important;
    }
  }
  @media only screen and (max-width: 863px) {
    margin-right: 0 !important;
  }
  button {
    text-decoration: none;
    color: ${({ bg }) =>
      bg === "green"
        ? "var(--beige-2)"
        : bg === "red"
        ? "var(--beige-2)"
        : bg === "blue"
        ? "var(--beige-2)"
        : ""};
    position: relative;
    background-color: transparent;
    border: none;
    font-family: "Lato";
    font-size: 24px;
    line-height: 0.6em;
    letter-spacing: 1px;

    @media only screen and (max-width: 1263px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1006px) {
      font-size: 18px;
    }

    &:after {
      content: "";
      position: absolute;
      left: -3px;
      top: calc(50% - 2px);
      width: calc(100% + 6px);
      height: 6px;
      z-index: -1;
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "blue"
          ? "var(--light-blue)"
          : ""};
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &.active:after,
    &:hover:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
    &:focus:after {
      transform: scaleY(1);
    }
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1128px) {
    padding: 40px 56px;
  }
  @media only screen and (max-width: 1005px) {
    padding: 40px 30px;
  }
  @media only screen and (max-width: 798px) {
    padding: 36px 20px;
  }
`

const CategoryNavigation = ({
  bg = "red",
  categories,
  activeCategory,
  setActiveCategory,
  smaller,
  italiano,
}) => {
  return (
    <Wrapper padding="0" bg={bg}>
      <StyledContentWrapper bg={bg} padding="40px 56px 40px 102px">
        <PageHeaderStyles bg={bg} className="blog">
          {categories.map(category => (
            <NavStyles
              italiano={italiano}
              smaller={smaller}
              key={category}
              bg={bg}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={e => setActiveCategory(e, category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </motion.button>
            </NavStyles>
          ))}
        </PageHeaderStyles>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default CategoryNavigation
