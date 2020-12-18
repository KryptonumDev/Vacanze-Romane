import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { AnimatePresence, motion } from "framer-motion"
import PageHeaderNav from "../PageHeaderNav/PageHeaderNav"
import { Paragraph } from "../../assets/styles/HomeStyles"
import useWindowSize from "../../utils/useWindowSize"

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ fullHeight }) => (fullHeight ? "calc(100vh - 89px)" : "")};
  @media only screen and (min-width: 868px) {
    height: ${({ fullHeight }) => (fullHeight ? "calc(120vh - 89px)" : "")};
  }
  @media only screen and (max-width: 1105px) {
    height: ${({ fullHeight }) => (fullHeight ? "calc(100vh - 60px)" : "")};
  }
  position: relative;
  padding: ${({ padding }) => padding};
  text-align: ${({ centered }) => centered && "center"};
  background-color: ${({ bg }) =>
    bg === "light"
      ? "var(--bg-home)"
      : bg === "green"
      ? "var(--dead-green)"
      : bg === "brown"
      ? "var(--brown)"
      : bg === "red"
      ? "var(--dark-red)"
      : bg === "blue"
      ? "var(--blue)"
      : ""};
  h1,
  h2 {
    font-family: "Cormorant Garamond";
    color: var(--beige-2);
    font-weight: 400;
    letter-spacing: 1px;
    z-index: 1;
  }

  h1 {
    font-size: 72px;
    line-height: 0.81em;
  }

  h2 {
    font-size: 24px;
    line-height: 1.25em;
    margin: 24px 0;
    text-transform: uppercase;
  }
  p {
    font-family: "Homemade Apple";
    margin-bottom: 60px;
    font-size: 24px;
    line-height: 1.25em;
    letter-spacing: 1px;
    z-index: 1;
    color: var(--beige-2);
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 36px;
    }
    h2,
    p {
      font-size: 18px;
    }
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute !important;
  left: 0;
  top: 0;
`
const ShorterImage = styled(Image)`
  width: 100%;
  height: 387px;
  object-fit: cover;
  left: 0;
  top: 0;
`

const HeaderOverlay = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ home }) => home && "rgba(20, 16, 13, 0.4)"};
`

const SingleParagraph = styled(motion.p)`
  &.single {
    font-size: 36px;
    margin: ${({ zeroMarginBottom }) => (zeroMarginBottom ? "0" : "0 0 120px")};
    font-family: ${({ fontFamily }) => fontFamily};
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 798px) {
    padding: 76px 0px 0;
    text-align: center;
    ${({ fullHeight }) =>
      fullHeight &&
      css`
        justify-content: flex-start;
        padding-top: 40px;
        color: var(--brown);
        height: calc(100vh - 61px);
        ${StyledImage} {
          top: 40vh;
          height: calc(60vh - 61px);
        }
        ${HeaderOverlay} {
          top: 40vh;
          height: calc(60vh - 61px);
          background-color: rgba(97, 93, 91, 0.2);
        }
        h1,
        h2,
        p {
          color: var(--brown);
          text-align: center;
          padding: 0 20px;
        }
      `}
  }
`

const StyledSingleParagraph = styled(SingleParagraph)`
  @media only screen and (max-width: 1105px) {
    &.single {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 798px) {
    &.single {
      font-size: 24px;
      padding: 0 20px;
    }
  }
  @media only screen and (max-width: 520px) {
    &.single {
      font-size: 18px;
      margin: 0 0 90px;
    }
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1105px) {
    font-size: 28px !important;
    padding: 0 20px;
  }
`

const StyledPlainParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1105px) {
    font-size: 18px !important;
  }
  @media only screen and (max-width: 798px) {
    font-size: 15px !important;
    padding: 0 20px;
  }
`

const PageHeader = ({
  title,
  bg,
  subtitle,
  paragraph,
  subheader,
  imgFluid,
  mobileImgFluid,
  fullHeight,
  withNav,
  subNav,
  search,
  navItems,
  lesson = false,
  article = false,
  padding,
  home,
  italiano,
  blog,
}) => {
  let width = useWindowSize()
  return (
    <StyledContentWrapper
      fullHeight={fullHeight}
      bg={bg}
      padding={padding ? padding : !search ? "98px 0px 0" : "65px 0 80px"}
      centered
    >
      {!search && !lesson ? (
        <>
          {!withNav ? (
            <>
              {title && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.2,
                      ease: [0.39, 0.575, 0.565, 1],
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {title}
                </motion.h1>
              )}
              {subtitle && (
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.8,
                      ease: [0.39, 0.575, 0.565, 1],
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {subtitle}
                </motion.h2>
              )}
              {paragraph && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1.4,
                      ease: [0.39, 0.575, 0.565, 1],
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {paragraph}
                </motion.p>
              )}
              {fullHeight && (
                <>
                  <StyledImage fluid={imgFluid} />
                  <HeaderOverlay home={home} />
                </>
              )}
            </>
          ) : (
            <>
              {paragraph && (
                <StyledSingleParagraph
                  className="single"
                  zeroMarginBottom={subheader}
                  textAlign="center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.4 },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {paragraph}
                </StyledSingleParagraph>
              )}
              {subheader && (
                <StyledParagraph
                  fontSize="48px !important"
                  lineHeight="1em !important"
                  letterSpacing="1px !important"
                  fontFamily="Cormorant Garamond !important"
                  textAlign="center"
                  margin={
                    article
                      ? "24px 0 148px !important"
                      : "24px 0 70px !important"
                  }
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.4 },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {subheader}
                </StyledParagraph>
              )}
              <AnimatePresence exitBeforeEnter>
                {imgFluid && (
                  <motion.div
                    key={imgFluid.src}
                    initial={{ opacity: 0 }}
                    animate={
                      italiano || blog
                        ? {
                            opacity: 1,
                            transition: {
                              delay: 0,
                              duration: 0.4,
                              ease: [0.39, 0.575, 0.565, 1],
                            },
                          }
                        : {
                            opacity: 1,
                            transition: {
                              delay: 0.9,
                              duration: 1,
                              ease: [0.39, 0.575, 0.565, 1],
                            },
                          }
                    }
                    exit={
                      italiano || blog
                        ? {
                            opacity: 1,
                            transition: {
                              delay: 0,
                              duration: 0.4,
                              ease: [0.39, 0.575, 0.565, 1],
                            },
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    style={{ width: "100%", position: "relative" }}
                  >
                    <ShorterImage
                      fluid={width <= 650 ? mobileImgFluid : imgFluid}
                    />
                    <HeaderOverlay />
                  </motion.div>
                )}
              </AnimatePresence>
              {subNav && <PageHeaderNav bg={bg} items={navItems} />}
            </>
          )}
        </>
      ) : !search ? (
        <>
          {subheader && (
            <StyledParagraph
              fontSize="48px !important"
              lineHeight="1em !important"
              letterSpacing="1px !important"
              fontFamily="Cormorant Garamond !important"
              margin="0 !important"
              textAlign="center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              exit={{ opacity: 0 }}
            >
              {subheader}
            </StyledParagraph>
          )}
          {paragraph && (
            <Paragraph
              textAlign="center"
              margin="24px 0"
              fontFamily="Lato !important"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              exit={{ opacity: 0 }}
            >
              {paragraph}
            </Paragraph>
          )}
        </>
      ) : (
        <>
          {subheader && (
            <StyledParagraph
              fontSize="48px !important"
              lineHeight="1em !important"
              letterSpacing="1px !important"
              fontFamily="Cormorant Garamond !important"
              margin="0 !important"
              textAlign="center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              exit={{ opacity: 0 }}
            >
              {subheader}
            </StyledParagraph>
          )}
          {paragraph && (
            <StyledPlainParagraph
              fontSize="24px"
              lineHeight="1.08em"
              margin="24px 0"
              fontFamily="Lato !important"
              textAlign="center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.6, delay: 0.5 },
              }}
              exit={{ opacity: 0 }}
            >
              {paragraph}
            </StyledPlainParagraph>
          )}
        </>
      )}
    </StyledContentWrapper>
  )
}
export default PageHeader
