import React, { useEffect, useState } from "react"
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

const PageLayout = ({ children }) => {
  const location = useLocation()
  const [headerBg, setHeaderBg] = useState("light")
  const [footerBg, setFooterBg] = useState("light")

  useEffect(() => {
    setHeaderBg(getHeaderBgFromLocation())
    setFooterBg(getFooterBgFromLocation())
  }, location)

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
    return "light"
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
    return "light"
  }

  return (
    <>
      <Helmet
        title={`Vacanze Romane | ${
          location.pathname === "/"
            ? "Ciao"
            : location.pathname
                .replace(/\//g, "")
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
            <Navigation bg={headerBg} />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer bg={footerBg} />
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
