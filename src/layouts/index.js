import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import Footer from "../components/Footer/Footer"
import { SearchProvider } from "../components/contexts/searchContext"
import { MenuProvider } from "../components/contexts/mobileMenuContext"
import ScrollToTop from "react-scroll-to-top"
import { HiOutlineArrowNarrowUp } from "react-icons/hi"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Wrapper = styled(motion.div)`
  margin: 0 auto;
`

const PageLayout = ({ children }) => {
  let location = useLocation()
  return (
    <>
      <Helmet defer={false}>
        <title>
          {`Vacanze Romane | ${
            location.pathname === "/"
              ? "Ciao"
              : location.pathname
                  .replace(/\//g, "")
                  .split("-")
                  .map(
                    name =>
                      `${name.charAt(0).toUpperCase()}${name.substring(1)}`
                  )
                  .join(" ")
                  .replace("Wloski", "Włoski")
          }`}
        </title>
      </Helmet>
      <MenuProvider>
        <SearchProvider>
          <Wrapper>
            <GlobalStyle />
            <Navigation />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
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
