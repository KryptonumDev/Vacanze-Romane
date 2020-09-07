import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  picture img {
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1),
      transform 0.3s cubic-bezier(0.77, 0, 0.175, 1) !important;
  }
`

const ArticleWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  flex-direction: column;
  background-color: hsla(0, 0%, 95%);
  background-size: cover;
  overflow: hidden;
  &:hover {
    ${StyledImage} {
      img {
        transform: scale(0.95);
      }
    }
    h2::after {
      transform: scaleX(1);
    }
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 45px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 10px 25px;
  background-color: #000;
  justify-content: center;
`

const ArticleHeader = styled.h2`
  font-size: 19px;
  font-weight: 600;
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  position: relative;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    background-color: #fff;
    height: 2px;
    width: 40px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.15s 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
`

const ArticleExcerpt = styled.p`
  font-size: 13px;
  line-height: 1.6em;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.78);
  margin: 2px 0 0;
`

const ArticlePreview = ({ link, title, excerpt, featuredImageFluid }) => {
  return (
    <ArticleWrapper to={`/creators/${link}`}>
      <StyledImage fluid={featuredImageFluid} />
      <ContentWrapper>
        <ArticleHeader>{title}</ArticleHeader>
      </ContentWrapper>
    </ArticleWrapper>
  )
}

export default ArticlePreview
