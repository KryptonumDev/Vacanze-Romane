import React, { forwardRef, useState } from "react"
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
import styled, { css } from "styled-components"
import { useEffect } from "react"
import Pagination from "../Slider/Pagination"
import slugify from "slugify"
import { Link } from "gatsby"

export const StyledGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  max-width: ${({ smaller }) => smaller && "400px"};
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 43px 78px;
  @media only screen and (max-width: 1303px) {
    grid-gap: 43px 40px;

    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
  @media only screen and (max-width: 791px) {
    grid-template-columns: 1fr;
  }
  ${({ maxHeightOfImages }) =>
    maxHeightOfImages &&
    css`
      .gatsby-image-wrapper {
        max-height: ${maxHeightOfImages} !important;
        @media only screen and (max-width: 1085px) {
          max-height: 248px !important;
        }
        @media only screen and (max-width: 791px) {
          max-height: 180px !important;
        }
      }
    `}

  grid-template-columns: ${({ noPosts }) => noPosts && "1fr !important"};
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
export const PostPreview = ({ category, title, featuredImage, slug, base }) => (
  <PostStyles layout>
    <Link to={base ? `/${base}/${slug}` : slug}>
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

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1407px) {
    padding: 90px 102px;
  }
  @media only screen and (max-width: 1065px) {
    padding: 80px 60px;
  }
  @media only screen and (max-width: 865px) {
    padding: 40px 30px 40px;
  }

  @media only screen and (max-width: 798px) {
    flex-direction: column;
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

const StyledNoPosts = styled(Paragraph)`
  text-align: center;
  @media only screen and (max-width: 1085px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 798px) {
    font-size: 22px;
  }
`

const StyledGridDecorText = styled(GridItem)`
  @media only screen and (max-width: 1235px) {
    grid-column: 2/9;
  }
  @media only screen and (max-width: 798px) {
    grid-column: 1/-1;
  }
`

const StyledGridContent = styled(GridItem)`
  @media only screen and (max-width: 1235px) {
    grid-column: 4/11;
  }
  @media only screen and (max-width: 798px) {
    grid-column: 1/-1;
    margin-top: 20px;
    ${Paragraph} {
      font-size: 15px;
    }
  }
`

const StyledGridWritten = styled(GridItem)`
  @media only screen and (max-width: 1235px) {
    grid-column: 2/11;
    ${Paragraph} {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 798px) {
    grid-column: 1/-1;
    margin: 30px 0 0;
    ${Paragraph} {
      font-size: 18px;
    }
  }
`

const StyledFlex = styled(Flex)`
  @media only screen and (max-width: 1035px) {
    padding: 0 0 0 60px;
  }
  @media only screen and (max-width: 798px) {
    padding: 0;
    margin: 20px 0 0;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1081px) {
    font-size: 30px;
    margin: 0 0 0 5px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 26px;
  }
  @media only screen and (max-width: 645px) {
    font-size: 18px;
    margin: 3px 0 0;
  }
`
const StyledParagraphProseco = styled(Paragraph)`
  @media only screen and (max-width: 1235px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 15px;
  }
`
const StyledParagraphGrid = styled(Paragraph)`
  @media only screen and (max-width: 1235px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 645px) {
    font-size: 18px;
  }
`

const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const BlogSection = forwardRef(
  ({ activeCategory, posts, page, setPage, pageLength }, ref) => {
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [postsNumber, setPostsNumber] = useState(posts.length)
    useEffect(() => {
      setFilteredPosts(
        posts
          .filter(post => post.category === activeCategory)
          .slice(page * pageLength, (page + 1) * pageLength)
      )
      setPostsNumber(
        posts.filter(post => post.category === activeCategory).length
      )
    }, [activeCategory, page, posts, pageLength])

    return (
      <Wrapper padding="0" bg="light" ref={ref}>
        {activeCategory !== null ? (
          <>
            <StyledContentWrapper padding="90px 102px 50px">
              <StyledGrid
                key="blog-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                itemsInRow={2}
                maxHeightOfImages="328px"
                noPosts={filteredPosts.length === 0}
              >
                {filteredPosts.length >= 1 ? (
                  filteredPosts.map(post => (
                    <PostPreview
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      slug={slugify(post.slug, { lower: true })}
                      category={post.category}
                      title={post.title}
                      featuredImage={post.featuredimage}
                    />
                  ))
                ) : (
                  <StyledNoPosts
                    key="noPosts"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
            </StyledContentWrapper>
            <StyledPaginationWrapper padding="0 102px 100px">
              {postsNumber > 2 && (
                <Pagination
                  length={Math.floor(filteredPosts.length / pageLength)}
                  page={page}
                  setPage={setPage}
                />
              )}
            </StyledPaginationWrapper>
          </>
        ) : (
          <>
            <StyledContentWrapper
              padding="90px 102px 50px"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              key="content"
            >
              <Flex margin="0 5px 0 0" flex="1" flexDirection="column">
                <StyledCapitalizedText margin="0 0 0 10px">
                  A tavola
                </StyledCapitalizedText>
                <Line />
                <StyledParagraph margin="0 52px 0 5px">
                  Znam wielu ludzi, którzy ożywiają się i natychmiast
                  rozpromieniają na dźwięk jakiekolwiek słowa związanego z
                  Italią.
                </StyledParagraph>
              </Flex>
              <StyledFlex
                margin="132px 0 0"
                padding="0 0 0 85px"
                flex="1"
                flexDirection="column"
              >
                <StyledParagraphProseco
                  fontFamily="Lato"
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                >
                  Florencja, Prosecco, Michał Anioł, Ferrari, Parmigiano
                  Reggiano, San Remo, Sardynia, cappuccino, Vespa - o każdym z
                  tych haseł, i o dziesiątkach innych, miłośnik Włoch gotów jest
                  rozmawiać godzinami z drugim takim samym jak on maniakiem. I
                  nieważne, że to akurat będzie ktoś nieznajomy, spotkany
                  przypadkiem w barze, w samolocie czy u cioci na imieninach.
                  Italomianiacy rozpoznają się bezbłędnie w największym tłumie.
                  A gdy się już wzajemnie dopadną, zapominają wtedy o całej
                  nudnej reszcie świata. <br />
                  <br />
                  Wiem, co mówię, bo też mam takie objawy. A przecież nie jestem
                  żadnym wyjątkiem.
                </StyledParagraphProseco>
              </StyledFlex>
            </StyledContentWrapper>
            <StyledPaginationWrapper
              padding="0 102px 100px"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Grid cols="repeat(12, 1fr)" rows="repeat(3, auto)">
                <StyledGridDecorText gridColumn="2/7" gridRow="0/1">
                  <StyledParagraphGrid>
                    Jeżeli chcesz dołączyć do tej niekończącej się, wciągającej
                    rozmowy, to chętnie podrzucę temat....
                  </StyledParagraphGrid>
                </StyledGridDecorText>
                <StyledGridContent
                  margin="50px 0 0"
                  gridColumn="5/11"
                  gridRow="2/3"
                >
                  <Paragraph
                    fontFamily="Lato"
                    fontSize="18px"
                    lineHeight="1.44em"
                    letterSpacing="1px"
                  >
                    O kulturze Włoch, albo o historii? Nie ma sprawy - od czasów
                    Romulusa jest w czym wybierać...
                    <br /> O podróżach, wakacjach, krajobrazach i&nbsp;włóczeniu
                    się po Italii? Sama przyjemność!
                    <br /> O sztuce i architekturze włoskiej? A&nbsp;istnieje
                    jakaś inna sztuka czy architektura?...
                    <br /> Że podobno nie samą sztuką człowiek żyje i że czasem
                    trzeba coś zjeść? Tak mówią tylko ci, którzy nic nie wiedzą,
                    co to jest włoska sztuka kulinarna.
                  </Paragraph>
                </StyledGridContent>
                <StyledGridWritten
                  margin="60px 0 0"
                  gridColumn="3/10"
                  gridRow="3/4"
                >
                  <Paragraph fontFamily="Homemade Apple">
                    Allora, parliamone a tavola!
                  </Paragraph>
                </StyledGridWritten>
              </Grid>
            </StyledPaginationWrapper>
          </>
        )}
      </Wrapper>
    )
  }
)

export default BlogSection
