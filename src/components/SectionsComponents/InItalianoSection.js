import React, { forwardRef, useMemo, useState } from "react"
import { ContentWrapper, Flex, Paragraph } from "../../assets/styles/HomeStyles"
import { Wrapper } from "../Wrapper/Wrapper"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { fadeOutAnimation } from "../animations"
import Image from "gatsby-image"
import styled from "styled-components"
import { useEffect } from "react"
import Pagination from "../Slider/Pagination"
import { Link } from "gatsby"
import slugify from "slugify"
import Search from "../Search/Search"
import { SeeMore } from "../Lesson/Lesson"

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
  grid-template-columns: ${({ noPosts }) => noPosts && "1fr !important"};
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
  display: flex;
  flex-direction: column;
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
export const StyledPostsWrapper = styled(ContentWrapper)`
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

const StyledSearchParagraph = styled(Paragraph)``

const StyledCategory = styled(Paragraph)`
  @media only screen and (max-width: 798px) {
    font-size: 14px;
    line-height: 18px;
    margin: 14px 0 0;
  }
`
const StyledTitle = styled(Paragraph)`
  @media only screen and (max-width: 798px) {
    font-size: 15px;
    line-height: 24px;
    margin: 14px 0 0;
  }
`

const StyledLink = styled(Link)`
  &:hover div {
    opacity: 1;
    svg {
      transform: translateX(4px);
    }
  }
`

const PostPreview = ({ category, slug, title, featuredImage, key }) => (
  <PostStyles
    key={key}
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <StyledLink to={slug}>
      <div style={{ position: "relative" }}>
        <Image layout fluid={featuredImage.fluid} />
        <SeeMore text="Przejdź" />
      </div>
      <StyledCategory
        margin="30px 0 0"
        fontFamily="Cormorant Garamond"
        textTransform="uppercase"
        fontSize="18px"
        lineHeight="1em"
        letterSpacing="1px"
        color="var(--black)"
      >
        {category}
      </StyledCategory>
      <StyledTitle
        margin="30px 0 0"
        fontFamily="Lato"
        fontSize="24px"
        lineHeight="1.25em"
        letterSpacing="1px"
        color="var(--black)"
      >
        {title}
      </StyledTitle>
    </StyledLink>
  </PostStyles>
)

const StyledNoPosts = styled(Paragraph)`
  text-align: center;
  @media only screen and (max-width: 1085px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 798px) {
    font-size: 22px;
    text-align: center;
  }
`

const Title = styled.h2`
  color: var(--brown, #32251D);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
  margin-bottom: clamp(32px, calc(60vw/7.68), 84px);

  font-family: 'Cormorant Garamond';
  font-size: clamp(24px, calc(36vw/7.68), 36px);
  font-style: normal;
  font-weight: 400;
  line-height: 111.111%;
  letter-spacing: 1px;
`

const ItalianoSection = forwardRef(
  ({ activeCategory, posts, page, setPage, pageLength }, ref) => {
    const filteredPosts = useMemo(() => {
      return posts
        .filter(post => post.category === activeCategory)
        .slice((page - 1) * pageLength, page * pageLength)
    }, [activeCategory, page, posts, pageLength])
    const postsNumber = useMemo(() => {
      return posts.filter(post => post.category === activeCategory).length
    }, [activeCategory, page, posts, pageLength])

    return (
      <Wrapper padding="0" bg="white">
        <StyledContentWrapper padding="90px 192px 104px">
          <StyledParagraph textAlign="center">
            Ucząc się włoskiego nieustannie poruszasz się od&nbsp;szczegółu
            do&nbsp;ogółu: od&nbsp;znaczenia słowa do&nbsp;reguł gramatycznych
            -&nbsp;i&nbsp;z&nbsp;powrotem.
            <br />
            Zasady gramatyczne, zasób słownictwa i&nbsp;konkretne przykłady
            użycia słów -&nbsp;w&nbsp;taką sieć złowimy sens każdej wypowiedzi
            po włosku.
          </StyledParagraph>
          <StyledSearchParagraph
            textAlign="center"
            fontFamily="Lato"
            fontSize="22px"
            margin="40px 0 0"
          >
            Wyszukaj temat lub zagadnienie językowe, które chcesz poznać.
          </StyledSearchParagraph>
          <Flex justifyContent="center" alignSelf="center" margin="40px 0 0">
            <Search italiano mobile className="desktop" bg="light" />
          </Flex>
        </StyledContentWrapper>
        {activeCategory !== "Initaliano" && (
          <Title>{activeCategory} ({postsNumber})</Title>
        )}
        <StyledPostsWrapper padding="0 102px 50px" ref={ref}>
          {/* <AnimateSharedLayout type="crossfade"> */}
          <AnimatePresence mode='wait'>
            <StyledGrid itemsInRow={2} noPosts={filteredPosts.length === 0}>
              {filteredPosts.length >= 1
                ? filteredPosts.map(post => (
                  <PostPreview
                    key={post.id}
                    category={post.category}
                    title={post.title}
                    slug={slugify(post.slug, {
                      lower: true,
                      strict: true,
                      trim: true
                    })}
                    featuredImage={post.featuredimage}
                  />
                ))
                : activeCategory !== "Initaliano" && (
                  <StyledNoPosts
                    key="no-posts"
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
                  </StyledNoPosts>
                )}
            </StyledGrid>
          </AnimatePresence>
          {/* </AnimateSharedLayout> */}
        </StyledPostsWrapper>
        <StyledPaginationWrapper padding="0 102px 100px">
          {postsNumber > 0 && (
            <Pagination
              length={postsNumber}
              page={page}
              setPage={setPage}
            />
          )}
        </StyledPaginationWrapper>
      </Wrapper>
    )
  }
)

export default ItalianoSection
