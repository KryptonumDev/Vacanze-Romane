import React, { useEffect, useState } from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import styled from "styled-components"
import { motion,
  // AnimateSharedLayout  , 
  AnimatePresence} from "framer-motion"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import Image from "gatsby-image"
import Pagination from "./Pagination"
import useWindowSize from "../../utils/useWindowSize"
import { fadeOutAnimation } from "../animations"
import { SeeMore } from "../Lesson/Lesson"

const StyledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
`

const ArticlePreview = styled(motion.article)`
  display: flex;
  flex-direction: column;
  position: relative;

  .gatsby-image-wrapper {
    height: 340px;
    overflow: hidden !important;
    img,
    picture {
      object-fit: cover !important;
      transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
    }
  }

  &:hover {
    img,
    picture {
      transform: scale(1.05);
    }
    div {
      opacity: 1;
      span {
        color: var(--beige-2);
      }
      svg {
        transform: translateX(4px);
      }
    }
  }
  span {
    font-family: "Cormorant Garamond";
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
    line-height: 1;
    letter-spacing: 1px;
    margin: 31px 0;
    color: var(--black);
  }

  h3 {
    font-family: "Lato";
    font-size: 24px;
    font-weight: normal;
    line-height: 1.25em;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 798px) {
    span {
      font-size: 14px;
    }
    h3 {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 645px) {
    span {
      margin: 26px 0 12px;
    }
    h3 {
      font-size: 15px;
    }
  }
`

const query = graphql`
  {
    allDatoCmsArticle(
      sort: { fields: meta___publishedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        category
        title
        slug
        id
        featuredimage {
          fluid(maxWidth: 580) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`

const StyledWrapper = styled(Wrapper)`
  @media only screen and (max-width: 645px) {
    padding: 0;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1051px) {
    padding: 90px 65px 105px;
  }
  @media only screen and (max-width: 798px) {
    padding: 80px 40px 90px;
  }
  @media only screen and (max-width: 645px) {
    padding: 72px 30px;
  }
`
const SliderGrid = styled(StyledGrid)`
  @media only screen and (max-width: 1051px) {
    grid-gap: 60px;
    .gatsby-image-wrapper {
      height: 240px;
    }
  }

  @media only screen and (max-width: 798px) {
    grid-gap: 40px;
    .gatsby-image-wrapper {
      height: 210px;
    }
  }

  @media only screen and (max-width: 645px) {
    grid-gap: 0;
    grid-template-columns: 1fr;
    margin-top: 22px;
  }
  @media only screen and (max-width: 445px) {
    .gatsby-image-wrapper {
      height: 180px;
    }
  }
`

const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const Slider = ({ header }) => {
  const data = useStaticQuery(query)
  const width = useWindowSize()

  const [page, setPage] = useState(0)
  const [pageLength, setPageLength] = useState(2)

  useEffect(() => {
    if (width <= 645) {
      setPageLength(1)
    } else {
      setPageLength(2)
    }
  }, [width])

  const getBase = category => {
    const italianoCategories = [
      "vocabolario",
      "grammatica",
      "frasi e citazioni",
    ]
    return italianoCategories.includes(category.toLowerCase())
      ? "in-italiano"
      : "blog"
  }

  return (
    <StyledWrapper bg="light" margin="0">
      <StyledContentWrapper padding="90px 105px 100px 105px" direction="column">
        <StyledCapitalizedText
          fontSize="14px"
          lineHeight="1.04em"
          letterSpacing="5px"
          margin="0 0 0 10px"
          color="var(--brown)"
        >
          {header}
        </StyledCapitalizedText>
        <Line bg="var(--brownOp)" width="50%" />
        {/* <AnimateSharedLayout type="crossfade"> */}
          <SliderGrid>
            <AnimatePresence mode='wait'>
              {data.allDatoCmsArticle.nodes.length >= 1 ? (
                data.allDatoCmsArticle.nodes
                  .slice(page * pageLength, (page + 1) * pageLength)
                  .map(({ category, title, id, featuredimage, slug }) => (
                    <StyledLink
                      key={id}
                      to={`${getBase(category)}/${slugify(slug, {
                        lower: true,
                      })}`}
                    >
                      <ArticlePreview
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={id}
                      >
                        <div style={{ position: "relative" }}>
                          <Image layout fluid={featuredimage.fluid} />
                          <SeeMore text="Przejdź" />
                        </div>
                        <motion.span
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                        >
                          {category}
                        </motion.span>
                        <motion.h3
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                        >
                          {title}
                        </motion.h3>
                      </ArticlePreview>
                    </StyledLink>
                  ))
              ) : (
                <Paragraph
                  variants={fadeOutAnimation}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  fontSize="36px"
                  lineHeight="1.11em"
                  letterSpacing="1px"
                  fontWeight="400"
                  fontFamily="Cormorant Garamond"
                >
                  Brak artykułów do wyświetlenia.
                </Paragraph>
              )}
            </AnimatePresence>
          </SliderGrid>
        {/* </AnimateSharedLayout> */}
        {data.allDatoCmsArticle.nodes.length >= 1 && (
          <Pagination
            length={Math.floor(
              data.allDatoCmsArticle.nodes.length / pageLength
            )}
            page={page}
            setPage={setPage}
          />
        )}
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default Slider
