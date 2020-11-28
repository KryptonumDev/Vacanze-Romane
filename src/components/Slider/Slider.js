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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
`

const ArticlePreview = styled.article`
  display: flex;
  flex-direction: column;
`

const query = graphql`
  {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
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
        <CapitalizeText margin="0 0 0 10px">{header}</CapitalizeText>
        <Line bg="var(--brownOp)" width="50%" />
        <StyledGrid>
          {data.allDatoCmsArticle.nodes
            .slice(page, (page + 1) * pageLength)
            .map(({ title, id, featuredimage }) => (
              <ArticlePreview key={id}>
                <Image fluid={featuredimage.fluid} />
                <span>Category</span>
                <h3>{title}</h3>
              </ArticlePreview>
            ))}
        </StyledGrid>
        <Pagination length={3} page={page} setPage={setPage} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Slider
