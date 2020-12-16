import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import slugify from "slugify"
import styled from "styled-components"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import { fadeOutAnimation } from "../animations"
import Lesson from "../Lesson/Lesson"
import Line from "../Line/Line"
import Pagination from "../Slider/Pagination"
import { Wrapper } from "../Wrapper/Wrapper"
import { graphql, useStaticQuery } from "gatsby"
import CoursesContinueSection from "./CoursesContinueSection"
import { StyledPostsWrapper } from "./InItalianoSection"
import Crossed from "../Crossed/Crossed"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1081px) {
    padding: 90px 70px 100px 60px;
  }
  @media only screen and (max-width: 889px) {
    padding: 80px 30px 90px;
  }
  @media only screen and (max-width: 798px) {
    padding: 40px 30px 100px;
    flex-direction: column;
  }
`

const StyledGrid = styled(motion.div)`
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
  grid-template-columns: ${({ noPosts }) => noPosts && "1fr !important"};
`

const StyledParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1379px) {
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
const SecondParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1200px) {
    margin-right: 0;
  }
  @media only screen and (max-width: 645px) {
    font-size: 15px;
    margin: 16px 0 0;
  }
`
const ThirdParagraph = styled(Paragraph)`
  @media only screen and (max-width: 645px) {
    font-size: 15px;
    margin: 16px 0 0;
  }
`

const StyledCapitalizedText = styled(CapitalizeText)`
  line-height: 1.44em;
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    letter-spacing: 4px;
  }
`

export const StyledColumnFlex = styled(Flex)`
  @media only screen and (max-width: 1379px) {
    margin-left: 60px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 50px;
    margin-left: 0;
  }
  @media only screen and (max-width: 645px) {
    margin: 24px 0 0;
  }
`

const StyledFlexMobile = styled(Flex)`
  @media only screen and (max-width: 798px) {
    margin-right: 0;
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

const StyledPosts = styled(StyledPostsWrapper)`
  padding: 90px 102px 100px;
  @media only screen and (max-width: 1064px) {
    padding: 60px 60px 100px;
  }
  @media only screen and (max-width: 645px) {
    padding: 40px 30px 100px;
  }
`

const StyledWrapper = styled(Wrapper)``

const query = graphql`
  {
    datoCmsWloskiOdZeraPage {
      title
    }
  }
`

const CoursesStagesSection = React.forwardRef(
  ({ lessons, activeCourse, page, setPage, pageLength }, ref) => {
    const data = useStaticQuery(query)
    const [filteredLessons, setFilteredLessons] = useState(lessons)

    useEffect(() => {
      if (activeCourse !== null) {
        setFilteredLessons(
          lessons
            .filter(lesson =>
              activeCourse.toLowerCase().includes(lesson.lekcjaPoziom)
            )
            .slice(page * pageLength, (page + 1) * pageLength)
        )
      } else {
        setFilteredLessons([])
      }
    }, [activeCourse, page, lessons])

    return (
      <StyledWrapper ref={ref} padding="0" bg="light">
        <AnimatePresence>
          {activeCourse === "Kurs włoskiego od zera" ? (
            <StyledContentWrapper
              key="content"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              padding="90px 107px 110px 102px"
            >
              <StyledFlexMobile
                margin="0 16px 0 0"
                flex="1"
                flexDirection="column"
              >
                <StyledCapitalizedText margin="0 0 0 5px">
                  Etapy kursu od zera
                </StyledCapitalizedText>
                <Line />
                <StyledParagraph margin="0 52px 0 5px">
                  Tempo, w jakim chcesz robić postępy, dostosujesz do własnych,
                  indywidualnych potrzeb i&nbsp;możliwości.
                </StyledParagraph>
              </StyledFlexMobile>
              <StyledColumnFlex
                margin="140px 0 0"
                flex="1"
                flexDirection="column"
              >
                <SecondParagraph
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                >
                  Jeżeli dopiero zaczynasz - zacznij od WPROWADZENIA.
                  <br />
                  Jest to część wstępna kursu, dzięki której zadomowisz się
                  w&nbsp;podstawach języka włoskiego, a&nbsp;dalsza samodzielna
                  nauka będzie znacznie łatwiejsza.
                </SecondParagraph>
                <SecondParagraph
                  margin="32px 0 0"
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                >
                  Kolejny etap, czyli CZĘŚĆ PIERWSZA, pomoże Ci zacząć mówić
                  o&nbsp;sobie i&nbsp;używać włoskich czasowników.
                </SecondParagraph>
                <ThirdParagraph
                  margin="32px 0 0"
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                >
                  Obie te części kursu przygotują Cię do dalszej nauki, którą
                  możesz kontynuować samodzielnie, korzystając z&nbsp;dostępnych
                  odpłatnie i&nbsp;podzielonych na kolejne etapy lekcji.
                  <br />
                  Informacje o następnych częściach “Kursu języka włoskiego od
                  zera” pojawią się w&nbsp;zakładce KONTYNUACJA.
                </ThirdParagraph>
              </StyledColumnFlex>
            </StyledContentWrapper>
          ) : activeCourse === "Wprowadzenie 0.0" ? (
            <StyledContentWrapper
              key="wprowadzenie"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              padding="90px 107px 110px 102px"
            >
              <StyledFlexMobile
                margin="0 16px 0 0"
                flex="2"
                flexDirection="column"
              >
                <StyledCapitalizedText margin="0 0 0 5px">
                  Czego nauczysz się na początku?
                </StyledCapitalizedText>
                <Line />
                <SecondParagraph
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                  margin="0 52px 0 5px"
                >
                  Zakres nowych słów (rzeczowniki, czasowniki, przyimki, zaimki
                  itd.) umożliwi samodzielne konstruowanie najprostszych zdań
                  i&nbsp;wyrażeń.
                </SecondParagraph>
                <SecondParagraph
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                  margin="12px 52px 0 5px"
                >
                  Seria lekcji, dzięki którym bez trudu przyswoisz podstawy
                  włoskiego, składa się z&nbsp;16 filmów.
                </SecondParagraph>
              </StyledFlexMobile>
              <StyledColumnFlex
                margin="0px 0 0 120px"
                flex="3"
                flexDirection="column"
              >
                <StyledParagraph margin="0 0 0 5px">
                  Wraz z&nbsp;lekcjami „Wprowadzenia” opanujesz swobodę
                  operowania liczbą i&nbsp;rodzajem gramatycznym włoskich
                  rzeczowników i&nbsp;przymiotników oraz przyswoisz sobie
                  włoskie zaimki dzierżawcze.
                </StyledParagraph>
                <StyledParagraph margin="0 0 0 5px">
                  Poznasz budowę włoskich zdań twierdzących i&nbsp;pytających,
                  a&nbsp;także podstawy dotyczące skomplikowanych włoskich{" "}
                  <Crossed
                    bottom="40%"
                    textBottom="-50px"
                    italianText="preposizioni"
                  >
                    przyimków.
                  </Crossed>
                </StyledParagraph>
              </StyledColumnFlex>
            </StyledContentWrapper>
          ) : activeCourse === "Część pierwsza 1.0" ? (
            <StyledContentWrapper
              key="pierwsza"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              padding="90px 107px 110px 102px"
            >
              <StyledFlexMobile
                margin="0 16px 0 0"
                flex="2"
                flexDirection="column"
              >
                <StyledCapitalizedText margin="0 0 0 5px">
                  Część pierwsza 1.0. to komunikacja
                </StyledCapitalizedText>
                <Line />
                <SecondParagraph
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                  margin="0 52px 0 5px"
                >
                  Po opanowaniu podstaw przechodzimy do lekcji, które składają
                  się na “Część Pierwszą” kursu. Część Pierwsza&nbsp;1.0. to
                  komunikacja. <br />A komunikacja językowa to przede wszystkim
                  czasowniki - bo bez czasowników nie opowiemy o&nbsp;żadnym
                  działaniu, o&nbsp;żadnej akcji.
                </SecondParagraph>
              </StyledFlexMobile>
              <StyledColumnFlex
                margin="0px 0 0 120px"
                flex="3"
                flexDirection="column"
              >
                <StyledParagraph margin="0 0 0 5px">
                  Dzięki lekcjom “Części Pierwszej” poczujesz się pewnie
                  w&nbsp;gąszczu podstawowych włoskich czasowników regularnych
                  i&nbsp;nieregularnych. Zaczniesz bez trudu poruszać się w ich
                  odmianach. A&nbsp;gdy trzeba będzie opowiedzieć krótko
                  o&nbsp;sobie – po włosku? Nie ma sprawy!{" "}
                  <Crossed
                    bottom="40%"
                    textBottom="-50px"
                    italianText="Nessun problema!"
                  >
                    Żaden problem!
                  </Crossed>
                </StyledParagraph>
              </StyledColumnFlex>
            </StyledContentWrapper>
          ) : (
            <StyledContentWrapper
              key="kontynuacja"
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              padding="90px 107px 110px 102px"
            >
              <StyledFlexMobile
                margin="0 16px 0 0"
                flex="1"
                flexDirection="column"
              >
                <StyledCapitalizedText margin="0 0 0 5px">
                  KONTYNUACJA “KURSU WŁOSKIEGO OD ZERA”
                </StyledCapitalizedText>
                <Line />
                <StyledParagraph margin="0 52px 0 5px">
                  Jeśli masz już opanowane podstawy “Kursu języka włoskiego od
                  zera”, możesz kontynuować naukę korzystając z&nbsp;pakietów
                  płatnych lekcji.
                  <br />
                  Każdy pakiet będzie składał się z&nbsp;wielu filmów,
                  z&nbsp;e-booka&nbsp;dokładnie opisującego materiał
                  z&nbsp;filmów oraz z&nbsp;ćwiczeń na zakończenie każdej
                  filmowej lekcji.
                  <br />
                  Wszystkie kolejne części kursu dostępne będą do kupienia
                  w&nbsp;zakładce BOTTEGA
                </StyledParagraph>
              </StyledFlexMobile>
              <StyledColumnFlex
                margin="140px 0 0"
                flex="1"
                flexDirection="column"
              >
                <SecondParagraph
                  fontSize="18px"
                  lineHeight="1.44em"
                  letterSpacing="1px"
                  fontFamily="Lato"
                >
                  Poniżej znajdziesz dokładny spis treści każdej kolejnej części
                  “Kursu języka włoskiego od zera”. W&nbsp;tej chwili kolejne
                  części kursu są dopiero w&nbsp;przygotowaniu.
                </SecondParagraph>
              </StyledColumnFlex>
            </StyledContentWrapper>
          )}
          {filteredLessons.length >= 1 && (
            <StyledPosts
              variants={fadeOutAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              key="posts"
              padding="0 102px 50px"
            >
              <StyledGrid
                variants={fadeOutAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
                itemsInRow={2}
                noPosts={filteredLessons.length === 0}
              >
                {filteredLessons.length >= 1 &&
                  filteredLessons.map(lesson => (
                    <Lesson
                      variants={fadeOutAnimation}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      key={lesson.id}
                      lesson={lesson}
                    />
                  ))}
              </StyledGrid>
            </StyledPosts>
          )}
        </AnimatePresence>
      </StyledWrapper>
    )
  }
)

export default CoursesStagesSection
