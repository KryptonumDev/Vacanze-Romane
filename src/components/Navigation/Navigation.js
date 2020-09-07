import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  padding: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 28px;
  margin-right: 10px;
`

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  margin-left: 32px;
`
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">9M13</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/blog">articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
