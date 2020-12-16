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
import { useStaticQuery } from "gatsby"

const Wrapper = styled(motion.div)`
  margin: 0 auto;
`

const query = graphql`
  {
    datoCmsHomePage {
      seoObrazek {
        url
      }
    }
  }
`

const PageLayout = ({ children }) => {
  const location = useLocation()
  const data = useStaticQuery(query)

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
        <meta
          name="title"
          content="Vacanze Romane - internetowa szkoła języka włoskiego"
        />
        <meta
          name="description"
          content="Chcesz rozpocząć naukę języka włoskiego?"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wloskiodzera.pl/" />
        <meta
          property="og:title"
          content="Vacanze Romane - internetowa szkoła języka włoskiego"
        />
        <meta
          property="og:description"
          content="Chcesz rozpocząć naukę języka włoskiego?"
        />
        <meta
          property="og:image"
          content={data.datoCmsHomePage.seoObrazek.url}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wloskiodzera.pl/" />
        <meta
          property="twitter:title"
          content="Vacanze Romane - internetowa szkoła języka włoskiego"
        />
        <meta
          property="twitter:description"
          content="Chcesz rozpocząć naukę języka włoskiego? "
        />
        <meta
          property="twitter:image"
          content={data.datoCmsHomePage.seoObrazek.url}
        />
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
