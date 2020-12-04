import React, { useState } from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
} from "../../assets/styles/HomeStyles"
import styled from "styled-components"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"
import { graphql, useStaticQuery } from "gatsby"
import GridWrapper from "../GridWrapper/GridWrapper"
import slugify from "slugify"
import Image from "gatsby-image"
import Pagination from "./Pagination"

const StyledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
`

const ArticlePreview = styled(motion.article)`
  display: flex;
  flex-direction: column;

  .gatsby-image-wrapper {
    height: 340px;
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
    line-height: 0.75em;
    letter-spacing: 1px;
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

const Slider = ({ header }) => {
  const data = useStaticQuery(query)
  const [page, setPage] = useState(0)
  const pageLength = 2

  return (
    <Wrapper bg="light" margin="40px 0 0">
      <ContentWrapper padding="90px 105px 100px 105px" direction="column">
        <CapitalizeText
          fontSize="14px"
          lineHeight="1.04em"
          letterSpacing="5px"
          margin="0 0 0 10px"
          color="var(--brown)"
        >
          {header}
        </CapitalizeText>
        <Line bg="var(--brownOp)" width="50%" />
        <AnimateSharedLayout type="crossfade">
          <StyledGrid>
            <AnimatePresence exitBeforeEnter>
              {data.allDatoCmsArticle.nodes
                .slice(page * pageLength, (page + 1) * pageLength)
                .map(({ category, title, id, featuredimage }) => (
                  <ArticlePreview
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={id}
                  >
                    <Image layout fluid={featuredimage.fluid} />
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
                ))}
            </AnimatePresence>
          </StyledGrid>
        </AnimateSharedLayout>
        <Pagination
          length={Math.floor(data.allDatoCmsArticle.nodes.length / pageLength)}
          page={page}
          setPage={setPage}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Slider
