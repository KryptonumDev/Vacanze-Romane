import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../../assets/styles/HomeStyles"
import { PageHeaderStyles } from "../PageHeaderNav/PageHeaderNav"
import { Wrapper } from "../Wrapper/Wrapper"

const NavStyles = styled.li`
  button {
    text-decoration: none;
    color: ${({ bg }) =>
      bg === "green" ? "var(--beige-2)" : bg === "red" ? "var(--beige-2)" : ""};
    position: relative;
    background-color: transparent;
    border: none;
    font-family: "Lato";
    font-size: 24px;
    line-height: 0.6em;
    letter-spacing: 1px;

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

const CategoryNavigation = ({ bg = "red", categories, setActiveCategory }) => {
  return (
    <Wrapper padding="0" bg={bg}>
      <ContentWrapper bg={bg} padding="40px 56px 40px 102px">
        <PageHeaderStyles bg={bg}>
          {categories.map(category => (
            <NavStyles bg={bg}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ y: -2 }}
                onClick={e => setActiveCategory(e, category)}
              >
                {category}
              </motion.button>
            </NavStyles>
          ))}
        </PageHeaderStyles>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CategoryNavigation
