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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 43px 78px;
  @media only screen and (max-width: 1191px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media only screen and (max-width: 791px) {
    grid-gap: 43px 40px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`

const PostStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .gatsby-image-wrapper {
    height: 328px !important;
    overflow: hidden !important;
    @media only screen and (max-width: 1085px) {
      height: 248px !important;
    }
    @media only screen and (max-width: 791px) {
      height: 180px !important;
    }
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

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1407px) {
    padding: 90px 102px;
  }
  @media only screen and (max-width: 1065px) {
    padding: 80px 60px;
  }
  @media only screen and (max-width: 865px) {
    padding: 40px 30px 60px;
  }
`
const StyledPostsWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1407px) {
    padding: 50px 102px;
  }
  @media only screen and (max-width: 1065px) {
    padding: 0px 60px 50px;
  }
  @media only screen and (max-width: 865px) {
    padding: 0px 30px 50px;
  }
`

const StyledPaginationWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1407px) {
    padding: 20px 102px 80px;
  }
  @media only screen and (max-width: 1065px) {
    padding: 0px 60px 80px;
  }
  @media only screen and (max-width: 865px) {
    padding: 0px 30px 80px;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1065px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 793px) {
    font-size: 22px;
    text-align: left;
  }
  @media only screen and (max-width: 535px) {
    font-size: 18px;
    text-align: left;
  }
`

const StyledCategory = styled(Paragraph)`
  @media only screen and (max-width: 565px) {
    font-size: 14px;
    line-height: 18px;
    margin: 14px 0 0;
  }
`
const StyledTitle = styled(Paragraph)`
  @media only screen and (max-width: 565px) {
    font-size: 15px;
    line-height: 24px;
    margin: 14px 0 0;
  }
`

const PostPreview = ({ category, slug, title, featuredImage }) => (
  <PostStyles layout>
    <Link to={slug}>
      <Image layout fluid={featuredImage.fluid} />
      <StyledCategory
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
      </StyledCategory>
      <StyledTitle
        layout
        margin="30px 0 0"
        fontFamily="Lato"
        fontSize="24px"
        lineHeight="0.75em"
        letterSpacing="1px"
        color="var(--black)"
      >
        {title}
      </StyledTitle>
    </Link>
  </PostStyles>
)

const StyledNoPosts = styled(Paragraph)`
  @media only screen and (max-width: 1085px) {
    font-size: 30px;
  }
`

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
      <StyledContentWrapper
        padding="90px 192px 104px"
        variants={fadeOutAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        key="italianoParagraph"
      >
        <StyledParagraph textAlign="center">
          Ucząc się włoskiego nieustannie poruszasz się od szczegółu do ogółu:
          od znaczenia słowa do reguł gramatycznych
          -&nbsp;i&nbsp;z&nbsp;powrotem.
          <br />
          Zasady gramatyczne, zasób słownictwa i konkretne przykłady użycia słów
          -&nbsp;w&nbsp;taką sieć złowimy sens każdej wypowiedzi po włosku.
        </StyledParagraph>
      </StyledContentWrapper>
      <StyledPostsWrapper
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
          itemsInRow={2}
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
            <StyledNoPosts
              fontSize="36px"
              lineHeight="1.11em"
              letterSpacing="1px"
              fontWeight="400"
              fontFamily="Cormorant Garamond"
            >
              Brak artykułów do wyświetlenia.
            </StyledNoPosts>
          )}
        </StyledGrid>
      </StyledPostsWrapper>
      <StyledPaginationWrapper padding="0 102px 100px">
        {filteredPosts.length >= 1 && (
          <Pagination
            length={Math.floor(filteredPosts.length / pageLength)}
            page={page}
            setPage={setPage}
          />
        )}
      </StyledPaginationWrapper>
    </Wrapper>
  )
}

export default ItalianoSection
