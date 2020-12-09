import React from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { motion } from "framer-motion"
import PageHeaderNav from "../PageHeaderNav/PageHeaderNav"
import { Paragraph } from "../../assets/styles/HomeStyles"

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ fullHeight }) => (fullHeight ? "calc(100vh - 89px)" : "")};
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
  background-color: rgba(20, 16, 13, 0.6);
  @media only screen and (max-width: 798px) {
    background-color: rgba(20, 16, 13, 0.3);
  }
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
    padding: 76px 0 0;
    ${({ fullHeight }) =>
      fullHeight &&
      css`
        justify-content: flex-start;
        padding-top: 40px;
        color: var(--brown);
        height: calc(80vh - 61px);
        ${StyledImage} {
          top: 30vh;
          height: calc(50vh - 61px);
        }
        ${HeaderOverlay} {
          top: 30vh;
          height: calc(50vh - 61px);
          background-color: rgba(20, 16, 13, 0.3);
        }
        h1,
        h2,
        p {
          color: var(--brown);
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
    }
  }
  @media only screen and (max-width: 520px) {
    &.single {
      font-size: 18px;
      margin: 0 0 90px;
    }
  }
`

const PageHeader = ({
  title,
  bg,
  subtitle,
  paragraph,
  subheader,
  imgFluid,
  fullHeight,
  withNav,
  subNav,
  search,
  navItems,
  lesson = false,
  article = false,
  padding,
}) => (
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
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {paragraph && <p>{paragraph}</p>}
            {fullHeight && (
              <>
                <StyledImage fluid={imgFluid} />
                <HeaderOverlay />
              </>
            )}
          </>
        ) : (
          <>
            {paragraph && (
              <StyledSingleParagraph
                className="single"
                zeroMarginBottom={subheader}
              >
                {paragraph}
              </StyledSingleParagraph>
            )}
            {subheader && (
              <Paragraph
                fontSize="48px !important"
                lineHeight="1em !important"
                letterSpacing="1px !important"
                fontFamily="Cormorant Garamond !important"
                textAling="center"
                margin={
                  article ? "24px 0 148px !important" : "24px 0 70px !important"
                }
              >
                {subheader}
              </Paragraph>
            )}
            {imgFluid && (
              <div style={{ width: "100%", position: "relative" }}>
                <ShorterImage fluid={imgFluid} />
                <HeaderOverlay />
              </div>
            )}
            {subNav && <PageHeaderNav bg={bg} items={navItems} />}
          </>
        )}
      </>
    ) : !search ? (
      <>
        {subheader && (
          <Paragraph
            fontSize="48px !important"
            lineHeight="1em !important"
            letterSpacing="1px !important"
            fontFamily="Cormorant Garamond !important"
            margin="0 !important"
          >
            {subheader}
          </Paragraph>
        )}
        {paragraph && (
          <Paragraph margin="24px 0" fontFamily="Lato !important">
            {paragraph}
          </Paragraph>
        )}
      </>
    ) : (
      <>
        {subheader && (
          <Paragraph
            fontSize="48px !important"
            lineHeight="1em !important"
            letterSpacing="1px !important"
            fontFamily="Cormorant Garamond !important"
            margin="0 !important"
          >
            {subheader}
          </Paragraph>
        )}
        {paragraph && (
          <Paragraph
            fontSize="24px"
            lineHeight="1.08em"
            margin="24px 0"
            fontFamily="Lato !important"
          >
            {paragraph}
          </Paragraph>
        )}
      </>
    )}
  </StyledContentWrapper>
)
export default PageHeader
