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
    bg === "light" &&
    css`
      background-color: var(--bg-home);
      a {
        color: var(--brown);
        &:after {
          background-color: var(--beige-2);
        }
      }
    `}
`

const Logo = styled.span`
  font-family: "Lato";
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
`

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  z-index: 1;
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
    &:hover:after {
      transform: scaleY(1);
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 50px 0 100px;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
`

const NavigationListItem = styled(motion.li)`
  font-size: 18px;
  line-height: 1.11em;
  letter-spacing: 1px;
`

const Navigation = ({ bg }) => (
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
      <Search />
    </Container>
  </NavigationWrapper>
)

export default Navigation
