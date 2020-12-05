import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import PageHeader from "../components/PageHeader/PageHeader"
import styled from "styled-components"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { ContentWrapper, Flex, Paragraph } from "../assets/styles/HomeStyles"
import Button from "../components/Button/Button"
import ReactPlayer from "react-player/lazy"
import { IoPlayCircleSharp } from "react-icons/io5"
import slugify from "slugify"

const WelcomeSectionStyles = styled.section`
  padding: 0 102px;
  margin-bottom: 66px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 78px;
`

const CenteredParagraph = styled.p`
  font-family: "Cormorant Garamond";
  font-size: 36px;
  font-weight: normal;
  line-height: 1.11em;
  letter-spacing: 1px;
  text-align: center;
  p {
    font-family: "Cormorant Garamond";
    font-size: 36px;
    font-weight: normal;
    line-height: 1.11em;
    letter-spacing: 1px;
    text-align: center;
  }

  grid-column: 1/4;
  grid-row: 1/2;
`

const SmallerParagraph = styled.p`
  font-family: "Lato";
  font-size: 18px;
  line-height: 1.44em;
  letter-spacing: 1px;
  white-space: pre-wrap;

  p {
    font-family: "Lato";
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: 1px;
  }

  grid-column: 1/3;
  grid-row: 2/3;
`

const VideoSectionStyles = styled.section`
  background-color: var(--dead-green);
  padding: 80px 96px 83px 123px;
  margin-bottom: 36px;
  display: grid;
  grid-template-columns: minmax(220px, 1fr) 3fr;
  color: var(--beige-2);
  ol {
    list-style-position: inside;
    padding-right: 24px;
  }

  li {
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: 1px;
    &:first-child {
      margin-top: 0;
    }
  }
`

const InteractiveSectionStyles = styled.section`
  padding: 0 102px 0;
  margin: 82px 0;
`

const ParagraphSectionStyles = styled.section`
  padding: 24px 102px 0;
  p {
    font-family: "Lato";
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: 1px;
  }
`

const LessonLayout = ({ data, pageContext }) => {
  const {
    datoCmsLesson: {
      id,
      lessonTitle,
      lessonNumber,
      lekcjaPoziom,
      lessonContent,
    },
    total: { totalCount },
  } = data

  const { prev, next } = pageContext
  console.log(prev, next)
  console.log(lekcjaPoziom)

  const prevLink = prev
    ? `/wloski-od-zera/${slugify(lekcjaPoziom, {
        lower: true,
      })}/${slugify(prev, { lower: true })}`
    : null

  const nextLink = next
    ? `/wloski-od-zera/${slugify(lekcjaPoziom, {
        lower: true,
      })}/${slugify(next, { lower: true })}`
    : null

  const flatNumber = +lessonNumber.split(".")[1].trim()

  return (
    <>
      <PageHeader
        paragraph={lessonTitle}
        subheader={lessonNumber}
        withNav
        bg="green"
        lesson
      />
      <Wrapper padding="0" bg="white">
        <ContentWrapper direction="column" padding="78px 122px 0">
          {lessonContent.map(block => (
            <React.Fragment key={block.id}>
              {block.model.apiKey === "welcome_section" && (
                <WelcomeSectionStyles>
                  <CenteredParagraph
                    dangerouslySetInnerHTML={{
                      __html: block.centeredParagraph,
                    }}
                  />

                  <SmallerParagraph
                    dangerouslySetInnerHTML={{
                      __html: block.smallerParagraph,
                    }}
                  />
                </WelcomeSectionStyles>
              )}
              {block.model.apiKey === "sekcja_wideo" && (
                <VideoSectionStyles>
                  <Flex flexDirection="column">
                    <Paragraph color="var(--beige-2)" margin="0 0 31px">
                      {block.tekstNaglowka}
                    </Paragraph>
                    <div
                      dangerouslySetInnerHTML={{ __html: block.listaCzynnosci }}
                    />
                    <a
                      target="_blank"
                      href={block.linkPrzycisku}
                      download={block.filename}
                    >
                      <Button
                        margin="31px 0 0"
                        shorter
                        transparentBg
                        text={block.tekstPrzycisku}
                      />
                    </a>
                  </Flex>
                  <div style={{ marginLeft: "70px" }}>
                    <ReactPlayer
                      light
                      width="100%"
                      height="100%"
                      url="https://www.youtube.com/watch?v=25YTx1DeH08"
                      playIcon={<IoPlayCircleSharp size="135px" color="gray" />}
                    />
                  </div>
                </VideoSectionStyles>
              )}
              {block.model.apiKey === "paragraf_z_tekstem" && (
                <ParagraphSectionStyles
                  dangerouslySetInnerHTML={{ __html: block.tresc }}
                ></ParagraphSectionStyles>
              )}
              {block.model.apiKey === "cwiczenie_interaktywne" && (
                <InteractiveSectionStyles>
                  <iframe
                    src={block.link}
                    style={{ border: "0", width: "100%", height: "500px" }}
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                  ></iframe>
                </InteractiveSectionStyles>
              )}
            </React.Fragment>
          ))}
        </ContentWrapper>
        <ContentWrapper
          justifyContent="space-between"
          padding="80px 370px 100px"
        >
          <Link to={prevLink}>
            <Button disabled={prevLink === null} arrowLeft text="Poprzednia" />
          </Link>
          <Link to={nextLink}>
            <Button disabled={nextLink === null} arrowRight text="Następna" />
          </Link>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query LessonQuery($id: String!) {
    datoCmsLesson(id: { eq: $id }) {
      id
      lessonTitle
      lessonNumber
      lekcjaPoziom
      lessonContent {
        ... on DatoCmsWelcomeSection {
          id
          model {
            apiKey
          }
          centeredParagraph
          smallerParagraph
        }
        ... on DatoCmsSekcjaWideo {
          id
          model {
            apiKey
          }
          linkDoWideo
          linkPrzycisku
          listaCzynnosci
          tekstPrzycisku
          tekstNaglowka
          filename
        }
        ... on DatoCmsParagrafZTekstem {
          id
          model {
            apiKey
          }
          tresc
        }
        ... on DatoCmsCwiczenieInteraktywne {
          id
          model {
            apiKey
          }
          link
        }
      }
    }
    total: allDatoCmsLesson(filter: { lekcjaPoziom: { eq: "wprowadzenie" } }) {
      totalCount
    }
  }
`

export default LessonLayout
