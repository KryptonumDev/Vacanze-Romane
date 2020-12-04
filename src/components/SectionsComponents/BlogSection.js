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
import slugify from "slugify"
import { Link } from "gatsby"

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

const PostPreview = ({ category, title, featuredImage, slug }) => (
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

const BlogSection = ({ activeCategory, posts, page, setPage, pageLength }) => {
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
      <AnimatePresence>
        {activeCategory !== null ? (
          <>
            <ContentWrapper
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              key="postsGrid"
              padding="90px 102px 50px"
            >
              <StyledGrid
                variants={fadeOutAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {filteredPosts.map(post => (
                  <PostPreview
                    key={post.id}
                    variants={fadeOutAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    slug={slugify(post.slug, { lower: true })}
                    category={post.category}
                    title={post.title}
                    featuredImage={post.featuredimage}
                  />
                ))}
              </StyledGrid>
            </ContentWrapper>
            <ContentWrapper padding="0 102px 100px">
              <Pagination
                length={Math.floor(filteredPosts.length / pageLength)}
                page={page}
                setPage={setPage}
              />
            </ContentWrapper>
          </>
        ) : (
          <>
            <ContentWrapper
              padding="90px 102px 50px"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              key="content"
            >
              <Flex margin="0 5px 0 0" flex="1" flexDirection="column">
                <CapitalizeText margin="0 0 0 10px">A tavola</CapitalizeText>
                <Line />
                <Paragraph margin="0 52px 0 5px">
                  Znam wielu ludzi, którzy ożywiają się i natychmiast
                  rozpromieniają na dźwięk jakiekolwiek słowa związanego z
                  Italią.
                </Paragraph>
              </Flex>
              <Flex
                margin="132px 0 0"
                padding="0 0 0 85px"
                flex="1"
                flexDirection="column"
              >
                <Paragraph
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
                </Paragraph>
              </Flex>
            </ContentWrapper>
            <ContentWrapper
              padding="0 102px 100px"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Grid cols="repeat(12, 1fr)" rows="repeat(3, auto)">
                <GridItem gridColumn="2/7" gridRow="0/1">
                  <Paragraph>
                    Jeżeli chcesz dołączyć do tej niekończącej się, wciągającej
                    rozmowy, to chętnie podrzucę temat....
                  </Paragraph>
                </GridItem>
                <GridItem margin="50px 0 0" gridColumn="5/11" gridRow="2/3">
                  <Paragraph
                    fontFamily="Lato"
                    fontSize="18px"
                    lineHeight="1.44em"
                    letterSpacing="1px"
                  >
                    O kulturze Włoch, albo o historii? Nie ma sprawy - od czasów
                    Romulusa jest w czym <br />
                    <br />
                    wybierać.. O podróżach, wakacjach, krajobrazach i włóczeniu
                    się po Italii? Sama przyjemność!
                    <br />
                    <br /> O sztuce i architekturze włoskiej? A istnieje jakaś
                    inna sztuka czy architektura?...
                    <br />
                    <br /> Że podobno nie samą sztuką człowiek żyje i że czasem
                    trzeba coś zjeść? Tak mówią tylko ci, którzy nic nie wiedzą,
                    co to jest włoska sztuka kulinarna.
                  </Paragraph>
                </GridItem>
                <GridItem margin="60px 0 0" gridColumn="3/9" gridRow="3/4">
                  <Paragraph fontFamily="Homemade Apple">
                    Allora, parliamone a tavola!
                  </Paragraph>
                </GridItem>
              </Grid>
            </ContentWrapper>
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default BlogSection
