import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import { useSearchState } from "../components/contexts/searchContext"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { ContentWrapper, Flex, Paragraph } from "../assets/styles/HomeStyles"
import LessonsGrid from "../components/LessonsGrid/LessonsGrid"
import { StyledGrid } from "../components/SectionsComponents/BlogSection"
import { fadeOutAnimation } from "../components/animations"
import { PostPreview } from "../components/SectionsComponents/BlogSection"
import slugify from "slugify"
import Pagination from "../components/Slider/Pagination"
import styled from "styled-components"
import useWindowSize from "../utils/useWindowSize"
import SEO from "../components/SEO/SEO"

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  @media only screen and (max-width: 1105px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 22px;
  }
`

const PostsGrid = styled(StyledGrid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 43px 78px;
  @media only screen and (max-width: 1303px) {
    grid-gap: 43px 40px;

    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
  @media only screen and (max-width: 791px) {
    grid-template-columns: 1fr;
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
    padding: 40px 30px 40px;
  }

  @media only screen and (max-width: 798px) {
    flex-direction: column;
  }
`

const StyledNoPostsWrapper = styled(StyledContentWrapper)`
  @media only screen and (max-width: 1407px) {
    padding: 90px 102px 140px;
  }
  @media only screen and (max-width: 798px) {
    padding: 90px 40px 140px;
  }
  @media only screen and (max-width: 400px) {
    padding: 80px 20px 130px;
  }
`

const StyledHeaderParagraph = styled(Paragraph)`
  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }
`

const StyledWrapper = styled(Wrapper)`
  @media only screen and (max-width: 798px) {
    padding-top: 0;
  }
`

const SearchPage = ({ data }) => {
  const {
    lessons: { nodes: lessons },
    blogArticles: { nodes: blogArticles },
    italianoArticles: { nodes: italianoArticles },
  } = data

  const { query } = useSearchState()
  const width = useWindowSize()

  const [gridPage, setGridPage] = useState(0)
  const [gridPageLength, setGridPageLength] = useState(3)
  const [italianoGridPage, setItalianoGridPage] = useState(0)
  const [italianoGridPageLength, setItalianoGridPageLength] = useState(3)

  const [lessonsPage, setLessonsPage] = useState(0)
  const [lessonsPageLength, setLessonsPageLength] = useState(3)

  const [filteredLessons, setFilteredLessons] = useState(lessons)
  const [filteredArticles, setFilteredArticles] = useState(blogArticles)
  const [filteredItalianoArticles, setFilteredItalianoArticles] = useState(
    italianoArticles
  )
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const queryToUse = query.trim().toLowerCase()
    setFilteredLessons(
      lessons
        .filter(
          lesson =>
            lesson.lessonTitle.toLowerCase().includes(queryToUse) ||
            lesson.lessonNumber.toLowerCase().includes(queryToUse) ||
            lesson.lekcjaPoziom.toLowerCase().includes(queryToUse)
        )
        .sort((a, b) => {
          return Number(a.lessonNumber) - Number(b.lessonNumber)
        })
    )
    setFilteredArticles(
      blogArticles.filter(
        article =>
          article.title.toLowerCase().includes(queryToUse) ||
          article.category.toLowerCase().includes(queryToUse) ||
          article.slug.toLowerCase().includes(queryToUse)
      )
    )
    setFilteredItalianoArticles(
      italianoArticles.filter(
        article =>
          article.title.toLowerCase().includes(queryToUse) ||
          article.category.toLowerCase().includes(queryToUse) ||
          article.slug.toLowerCase().includes(queryToUse)
      )
    )
    setGridPage(0)
    setItalianoGridPage(0)
  }, [query, blogArticles, italianoArticles, lessons])

  useEffect(() => {
    setTotal(
      filteredLessons.length +
        filteredArticles.length +
        filteredItalianoArticles.length
    )
  }, [filteredLessons, filteredArticles, filteredItalianoArticles])

  useEffect(() => {
    if (width >= 1244) {
      setItalianoGridPageLength(3)
      setGridPageLength(3)
      setLessonsPageLength(3)
    } else if (width < 791) {
      setItalianoGridPageLength(1)
      setGridPageLength(1)
      setLessonsPageLength(2)
    } else {
      setItalianoGridPageLength(2)
      setGridPageLength(2)
      setLessonsPageLength(2)
    }
  }, [width])

  return (
    <>
      <SEO>
        <title>{query && query} · Szkoła języka włoskiego</title>
      </SEO>
      <PageHeader
        search
        subheader={query ? query : "Brak hasła do wyszukania"}
        paragraph={
          query
            ? total === 0
              ? "Brak wyników wyszukiwania"
              : `${total} wynik${total > 1 ? "ów" : ""} wyszukiwania`
            : width > 1105
            ? "Kliknij lupkę w prawym górnym rogu, aby je wpisać."
            : "Kliknij przycisk menu w prawym górnym rogu strony, a następnie lupę i wyszukaj."
        }
        bg="brown"
        withNav
      />
      <StyledWrapper bg="light">
        {total > 0 ? (
          <StyledContentWrapper direction="column" padding="78px 102px 100px">
            {filteredLessons.length > 0 && (
              <Flex
                width="100%"
                padding="0"
                margin="0 0 100px"
                flexDirection="column"
              >
                <StyledHeaderParagraph margin="0 0 33px 2px">
                  Lekcje
                </StyledHeaderParagraph>
                <LessonsGrid
                  max={lessonsPageLength}
                  lessons={filteredLessons.slice(
                    lessonsPage * lessonsPageLength,
                    (lessonsPage + 1) * lessonsPageLength
                  )}
                  withPage
                  page={lessonsPage}
                  setPage={setLessonsPage}
                />
                {filteredLessons.length > lessonsPageLength && (
                  <Pagination
                    length={
                      filteredLessons.length / lessonsPageLength >
                      Math.floor(filteredLessons.length / lessonsPageLength)
                        ? 1 +
                          Math.floor(filteredLessons.length / lessonsPageLength)
                        : Math.floor(filteredLessons.length / lessonsPageLength)
                    }
                    page={lessonsPage}
                    setPage={setLessonsPage}
                  />
                )}
              </Flex>
            )}

            <Flex
              width="100%"
              padding="0"
              margin="0 0 0"
              flexDirection="column"
            >
              {filteredArticles.length > 0 && (
                <>
                  <StyledHeaderParagraph margin="0 0 33px 2px">
                    Blog
                  </StyledHeaderParagraph>
                  <PostsGrid
                    variants={fadeOutAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    itemsInRow={3}
                    maxHeightOfImages="218px"
                  >
                    {filteredArticles.length >= 1 ? (
                      filteredArticles
                        .slice(
                          gridPage * gridPageLength,
                          (gridPage + 1) * gridPageLength
                        )
                        .map(post => (
                          <PostPreview
                            key={post.id}
                            variants={fadeOutAnimation}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            slug={slugify(post.slug, { lower: true })}
                            base="blog"
                            category={post.category}
                            title={post.title}
                            featuredImage={post.featuredimage}
                          />
                        ))
                    ) : (
                      <Paragraph
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
                      </Paragraph>
                    )}
                  </PostsGrid>
                  {filteredArticles.length > gridPageLength && (
                    <Pagination
                      length={
                        filteredArticles.length / gridPageLength >
                        Math.floor(filteredArticles.length / gridPageLength)
                          ? 1 +
                            Math.floor(filteredArticles.length / gridPageLength)
                          : Math.floor(filteredArticles.length / gridPageLength)
                      }
                      page={gridPage}
                      setPage={setGridPage}
                    />
                  )}
                </>
              )}
              {filteredItalianoArticles.length >= 1 && (
                <>
                  <StyledHeaderParagraph margin="100px 0 33px 2px">
                    in Italiano
                  </StyledHeaderParagraph>
                  <StyledGrid
                    variants={fadeOutAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    itemsInRow={3}
                    maxHeightOfImages="218px"
                  >
                    {filteredItalianoArticles.length >= 1 ? (
                      filteredItalianoArticles
                        .slice(
                          italianoGridPage * italianoGridPageLength,
                          (italianoGridPage + 1) * italianoGridPageLength
                        )
                        .map(post => (
                          <PostPreview
                            key={post.id}
                            variants={fadeOutAnimation}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            slug={slugify(post.slug, { lower: true })}
                            base="in-italiano"
                            category={post.category}
                            title={post.title}
                            featuredImage={post.featuredimage}
                          />
                        ))
                    ) : (
                      <Paragraph
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
                      </Paragraph>
                    )}
                  </StyledGrid>
                  {filteredItalianoArticles.length > italianoGridPageLength && (
                    <Pagination
                      length={
                        filteredItalianoArticles.length /
                          italianoGridPageLength >
                        Math.floor(
                          filteredItalianoArticles.length /
                            italianoGridPageLength
                        )
                          ? 1 +
                            Math.floor(
                              filteredItalianoArticles.length /
                                italianoGridPageLength
                            )
                          : Math.floor(
                              filteredItalianoArticles.length /
                                italianoGridPageLength
                            )
                      }
                      page={italianoGridPage}
                      setPage={setItalianoGridPage}
                    />
                  )}
                </>
              )}
            </Flex>
          </StyledContentWrapper>
        ) : (
          <StyledNoPostsWrapper
            direction="column"
            bg="white"
            padding="78px 102px 100px"
          >
            <StyledParagraph>Niestety, niczego nie znaleziono.</StyledParagraph>
          </StyledNoPostsWrapper>
        )}
      </StyledWrapper>
    </>
  )
}
export const query = graphql`
  {
    lessons: allDatoCmsLesson(sort: { fields: lessonNumber }) {
      nodes {
        id
        lekcjaPoziom
        lessonNumber
        lessonTitle
      }
    }
    blogArticles: allDatoCmsArticle(
      filter: { category: { in: ["Kultura", "Podróże", "Kuchnia", "Sztuka"] } }
    ) {
      nodes {
        title
        slug
        category
        id
        featuredimage {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }

    italianoArticles: allDatoCmsArticle(
      filter: {
        category: { in: ["Frasi e citazioni", "Grammatica", "Vocabolario"] }
      }
    ) {
      nodes {
        title
        slug
        category
        id
        featuredimage {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default SearchPage
