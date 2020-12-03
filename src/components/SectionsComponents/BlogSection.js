import React from "react"
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

const BlogSection = ({ activeCategory, posts }) => {
  return (
    <Wrapper padding="0" bg="white">
      <AnimatePresence>
        {activeCategory !== null ? (
          <ContentWrapper
            variants={fadeOutAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            padding="90px 102px 50px"
          >
            <motion.p initial="hidden" animate="show" exit="exit">
              {posts.map(
                post => post.category === activeCategory && post.title
              )}
            </motion.p>
          </ContentWrapper>
        ) : (
          <>
            <ContentWrapper
              padding="90px 102px 50px"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
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
