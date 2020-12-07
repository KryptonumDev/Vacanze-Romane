import React from "react"
import styled from "styled-components"
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
  position: relative;
  padding: ${({ padding }) => padding};
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
`

const SingleParagraph = styled(motion.p)`
  font-size: 36px !important;
  margin: ${({ zeroMarginBottom }) =>
    zeroMarginBottom ? "0 !important" : "0 0 120px !important"};
  font-family: ${({ fontFamily }) => fontFamily};
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
}) => (
  <ContentWrapper
    fullHeight={fullHeight}
    bg={bg}
    padding={!search ? "98px 0px 0" : "65px 0 80px"}
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
              <SingleParagraph zeroMarginBottom={subheader}>
                {paragraph}
              </SingleParagraph>
            )}
            {subheader && (
              <Paragraph
                fontSize="48px !important"
                lineHeight="1em !important"
                letterSpacing="1px !important"
                fontFamily="Cormorant Garamond !important"
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
  </ContentWrapper>
)
export default PageHeader
