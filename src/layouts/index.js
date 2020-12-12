import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import Footer from "../components/Footer/Footer"
import { SearchProvider } from "../components/contexts/searchContext"
import {
  MenuProvider,
  useMenuState,
} from "../components/contexts/mobileMenuContext"
import ScrollToTop from "react-scroll-to-top"
import { HiOutlineArrowNarrowUp } from "react-icons/hi"
import { Helmet } from "react-helmet"
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
      location.pathname.includes("o-mnie") ||
      location.pathname.includes("szukaj")
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
      location.pathname.includes("o-mnie") ||
      location.pathname.includes("szukaj")
    ) {
      return "brown"
    }
    if (location.pathname.includes("in-italiano")) {
      return "blue"
    }
  }

  return (
    <>
      <Helmet
        title={`Vacanze Romane | ${
          location.pathname === "/"
            ? "Ciao"
            : location.pathname
                .replaceAll("/", "")
                .split("-")
                .map(
                  name => `${name.charAt(0).toUpperCase()}${name.substring(1)}`
                )
                .join(" ")
                .replace("Wloski", "Włoski")
        }`}
        defer={false}
      />
      <MenuProvider>
        <SearchProvider>
          <Wrapper>
            <GlobalStyle />
            <Navigation bg={getHeaderBgFromLocation()} />
            <AnimatePresence>
              <ContentWrapper>{children}</ContentWrapper>
            </AnimatePresence>
            <Footer bg={getFooterBgFromLocation()} />
          </Wrapper>
          <ScrollToTop
            smooth
            top={700}
            className="scroll-to-top"
            component={
              <HiOutlineArrowNarrowUp size="26px" color="var(--beige-2)" />
            }
          />
        </SearchProvider>
      </MenuProvider>
    </>
  )
}
export default PageLayout
