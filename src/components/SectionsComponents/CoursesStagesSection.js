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
  @media only screen and (max-width: 1081px) {
    font-size: 30px;
    margin: 0 32px 0 5px;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 26px;
  }
  @media only screen and (max-width: 645px) {
    font-size: 22px;
    margin: 3px 0 0;
  }
`
const SecondParagraph = styled(Paragraph)`
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
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

export const StyledColumnFlex = styled(Flex)`
  @media only screen and (max-width: 798px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 645px) {
    margin-top: 24px;
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
              <Flex margin="0 16px 0 0" flex="1" flexDirection="column">
                <StyledCapitalizedText margin="0 0 0 5px">
                  {data.datoCmsWloskiOdZeraPage.capitalized_title}
                </StyledCapitalizedText>
                <Line />
                <StyledParagraph margin="0 52px 0 5px">
                  Tempo, w jakim chcesz robić postępy, dostosujesz do własnych,
                  indywidualnych potrzeb i&nbsp;możliwości.
                </StyledParagraph>
              </Flex>
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
                  możesz kontunuować samodzielnie, korzystając z&nbsp;dostępnych
                  odpłatnie i&nbsp;podzielonych na kolejne etapy lekcji.
                  <br />
                  Informacje o następnych częściach “Kursu języka włoskiego od
                  zera” pojawią się w&nbsp;zakładce KONTYNUACJA.
                </ThirdParagraph>
              </StyledColumnFlex>
            </StyledContentWrapper>
          ) : (
            <>
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
                  {filteredLessons.length >= 1 ? (
                    filteredLessons.map(lesson => (
                      <Lesson
                        variants={fadeOutAnimation}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        key={lesson.id}
                        lesson={lesson}
                      />
                    ))
                  ) : (
                    <CoursesContinueSection />
                  )}
                </StyledGrid>
              </StyledPosts>
              {/* <StyledPaginationWrapper padding="0 102px 100px">
                {filteredLessons.length >= 1 && (
                  <Pagination
                    length={Math.floor(filteredLessons.length / pageLength)}
                    page={page}
                    setPage={setPage}
                  />
                )}
              </StyledPaginationWrapper> */}
            </>
          )}
        </AnimatePresence>
      </StyledWrapper>
    )
  }
)

export default CoursesStagesSection
