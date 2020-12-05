import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Search from "../Search/Search"

const NavigationWrapper = styled.nav`
  background-color: var(--bg-home);
  a {
    text-decoration: none;
    color: var(--brown);
    &:after {
      background-color: var(--beige-2);
    }
  }

  ${({ bg }) =>
    bg === "light"
      ? css`
          background-color: var(--bg-home);
          a {
            color: var(--brown);
            &:after {
              background-color: var(--beige-2);
            }
          }
        `
      : bg === "green"
      ? css`
          background-color: var(--dead-green);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-green);
            }
          }
        `
      : bg === "brown"
      ? css`
          background-color: var(--brown);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-brown);
            }
          }
        `
      : bg === "red"
      ? css`
          background-color: var(--dark-red);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-red);
            }
          }
        `
      : bg === "blue" &&
        css`
          background-color: var(--blue);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-blue);
            }
          }
        `}
`

const Logo = styled.span`
  font-family: "Lato";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  a {
    padding: 24px 12px;
  }
`

const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
  list-style: none;
  z-index: 1;
  padding-right: 60px;
  a {
    font-family: "Cormorant Garamond";

    position: relative;
    padding: 24px 12px;
    margin: 0 12px 0 0;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active:after,
    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
  }
`

const Container = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 50px 0 100px;
  justify-content: space-between;
  align-items: center;
  min-height: 89px;
  z-index: 0;
`

const NavigationListItem = styled(motion.li)`
  font-size: 18px;
  line-height: 1.11em;
  letter-spacing: 1px;
`

const Navigation = ({ bg }) => {
  return (
    <NavigationWrapper bg={bg}>
      <Container>
        <Logo>
          <Link to="/">Vacanze Romane</Link>
        </Logo>
        <NavigationList bg={bg}>
          <Link activeClassName="active" to="/">
            <NavigationListItem bg={bg}>Ciao</NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/wloski-od-zera">
            <NavigationListItem bg={bg}>Włoski od Zera</NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/in-italiano">
            <NavigationListItem bg={bg}>in italiano</NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/blog">
            <NavigationListItem bg={bg}>Blog</NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/bottega">
            <NavigationListItem bg={bg}>Bottega</NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/o-mnie">
            <NavigationListItem bg={bg}>O mnie</NavigationListItem>
          </Link>
        </NavigationList>
        <Search bg={bg} />
      </Container>
    </NavigationWrapper>
  )
}

export default Navigation
