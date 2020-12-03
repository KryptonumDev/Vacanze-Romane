import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { motion } from "framer-motion"
import PageHeaderNav from "../PageHeaderNav/PageHeaderNav"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ fullHeight }) => (fullHeight ? "calc(100vh - 89px)" : "")};
  position: relative;
  background-color: ${({ bg }) =>
    bg === "light"
      ? "var(--bg-home)"
      : bg === "green"
      ? "var(--dead-green)"
      : bg === "brown"
      ? "var(--brown)"
      : bg === "red"
      ? "var(--dark-red)"
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
  background-color: rgba(50, 37, 29, 0.3);
`

const SingleParagraph = styled(motion.p)`
  font-size: 36px !important;
  margin: 135px 40px 105px !important;
`

const PageHeader = ({
  title,
  bg,
  subtitle,
  paragraph,
  imgFluid,
  fullHeight,
  withNav,
  subNav,
  navItems,
}) => (
  <ContentWrapper fullHeight={fullHeight} bg={bg}>
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
        {paragraph && <SingleParagraph>{paragraph}</SingleParagraph>}
        <ShorterImage fluid={imgFluid} />
        {subNav && <PageHeaderNav bg={bg} items={navItems} />}
      </>
    )}
  </ContentWrapper>
)
export default PageHeader
