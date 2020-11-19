import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const NavigationWrapper = styled.nav`
  padding: 0;
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
  a:first-child {
    margin-left: 40px;
  }
`

const NavigationListItem = styled(motion.li)`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
  padding: 16px 12px;
`
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">9M13</Link>
    </Logo>
    <NavigationList>
      <Link to="/about">
        <NavigationListItem whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          about
        </NavigationListItem>
      </Link>
      <Link to="/blog">
        <NavigationListItem whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          articles
        </NavigationListItem>
      </Link>
      <Link to="/gallery">
        <NavigationListItem whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          gallery
        </NavigationListItem>
      </Link>
      <Link to="/contact">
        <NavigationListItem whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          contact
        </NavigationListItem>
      </Link>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
