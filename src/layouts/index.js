import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import Footer from "../components/Footer/Footer"
import { SearchComponent, DatoCmsSearch } from "@wildpow/datocms-search"

const Wrapper = styled(motion.div)`
  margin: 0 auto;
`

const LocationHeaderBgMap = {
  "/": "light",
  "/wloski-od-zera": "green",
  "/blog": "red",
}

const LocationFooterBgMap = {
  "/": "red",
  "/wloski-od-zera": "green",
  "/blog/": "blue",
}

const PageLayout = ({ children }) => {
  const location = useLocation()
  console.log(location.pathname)
  const getHeaderBgFromLocation = () => {
    if (location.pathname === "/") {
      return "light"
    }
    if (location.pathname.includes("wloski-od-zera")) {
      return "green"
    }
    if (location.pathname.includes("in-italiano")) {
      return "blue"
    }

    if (location.pathname.includes("blog")) {
      return "red"
    }

    if (
      location.pathname.includes("bottega") ||
      location.pathname.includes("o-mnie")
    ) {
      return "brown"
    }
  }
  const getFooterBgFromLocation = () => {
    if (location.pathname === "/" || location.pathname.includes("blog")) {
      return "red"
    }
    if (location.pathname.includes("wloski-od-zera")) {
      return "green"
    }
    if (
      location.pathname.includes("bottega") ||
      location.pathname.includes("o-mnie")
    ) {
      return "brown"
    }
    if (location.pathname.includes("in-italiano")) {
      return "blue"
    }
  }

  const client = new DatoCmsSearch(process.env.API_DATO_SEARCH, "production")

  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation bg={getHeaderBgFromLocation()} />
      <SearchComponent client={client} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer bg={getFooterBgFromLocation()} />
    </Wrapper>
  )
}
export default PageLayout
