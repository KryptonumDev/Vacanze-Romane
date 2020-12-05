import React, { useState } from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"
import Grid, { GridItem } from "../Grid/Grid"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { fadeOutAnimation } from "../animations"
import Image from "gatsby-image"
import styled from "styled-components"
import { useEffect } from "react"
import Pagination from "../Slider/Pagination"
import { Link } from "gatsby"
import slugify from "slugify"

const StyledGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  max-width: ${({ smaller }) => smaller && "400px"};
  grid-template-columns: repeat(2, minmax(360px, 1fr));
  grid-gap: 43px 78px;
`

const PostStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .gatsby-image-wrapper {
    height: 328px !important;
    overflow: hidden !important;
    img,
    picture {
      object-fit: cover !important;
      transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
    }
  }
  a {
    text-decoration: none;
  }

  &:hover {
    img,
    picture {
      transform: scale(1.05);
    }
  }
`

const PostPreview = ({ category, slug, title, featuredImage }) => (
  <PostStyles layout>
    <Link to={slug}>
      <Image layout fluid={featuredImage.fluid} />
      <Paragraph
        margin="30px 0 0"
        fontFamily="Cormorant Garamond"
        textTransform="uppercase"
        fontSize="18px"
        lineHeight="1em"
        letterSpacing="1px"
        color="var(--black)"
        layout
      >
        {category}
      </Paragraph>
      <Paragraph
        layout
        margin="30px 0 0"
        fontFamily="Lato"
        fontSize="24px"
        lineHeight="0.75em"
        letterSpacing="1px"
        color="var(--black)"
      >
        {title}
      </Paragraph>
    </Link>
  </PostStyles>
)

const ItalianoSection = ({
  activeCategory,
  posts,
  page,
  setPage,
  pageLength,
}) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFilteredPosts(
      posts
        .filter(post => post.category === activeCategory)
        .slice(page * pageLength, (page + 1) * pageLength)
    )
  }, [activeCategory, page, posts])

  return (
    <Wrapper padding="0" bg="white">
      <ContentWrapper
        padding="90px 192px 104px"
        variants={fadeOutAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        key="italianoParagraph"
      >
        <Paragraph textAlign="center">
          Ucząc się włoskiego nieustannie poruszasz się od szczegółu do ogółu:
          od znaczenia słowa do reguł gramatycznych
          -&nbsp;i&nbsp;z&nbsp;powrotem.
          <br />
          Zasady gramatyczne, zasób słownictwa i konkretne przykłady użycia słów
          -&nbsp;w&nbsp;taką sieć złowimy sens każdej wypowiedzi po włosku.
        </Paragraph>
      </ContentWrapper>
      <ContentWrapper
        variants={fadeOutAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        key="postsGrid"
        padding="0 102px 50px"
      >
        <StyledGrid
          variants={fadeOutAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {filteredPosts.length >= 1 ? (
            filteredPosts.map(post => (
              <PostPreview
                key={post.id}
                variants={fadeOutAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
                category={post.category}
                title={post.title}
                slug={slugify(post.slug, { lower: true })}
                featuredImage={post.featuredimage}
              />
            ))
          ) : (
            <Paragraph
              fontSize="36px"
              lineHeight="1.11em"
              letterSpacing="1px"
              fontWeight="400"
              fontFamily="Cormorant Garamond"
            >
              Brak artykułów do wyświetlenia.
            </Paragraph>
          )}
        </StyledGrid>
      </ContentWrapper>
      <ContentWrapper padding="0 102px 100px">
        <Pagination
          length={Math.floor(filteredPosts.length / pageLength)}
          page={page}
          setPage={setPage}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default ItalianoSection
