import React from "react"
import { graphql, Link } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import styled from "styled-components"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { ContentWrapper, Flex, Paragraph } from "../assets/styles/HomeStyles"
import Button from "../components/Button/Button"
import ReactPlayer from "react-player/lazy"
import { IoPlayCircleSharp } from "react-icons/io5"
import slugify from "slugify"
import { Helmet } from "react-helmet"

const WelcomeSectionStyles = styled.section`
  padding: 0 102px;
  margin-bottom: 66px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 78px;

  @media only screen and (max-width: 1196px) {
    grid-row-gap: 50px;
    padding: 0 80px;
  }
  @media only screen and (max-width: 898px) {
    grid-row-gap: 40px;
    padding: 0 50px;
  }
  @media only screen and (max-width: 565px) {
    grid-row-gap: 32px;
    padding: 0 30px;
  }
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

  @media only screen and (max-width: 1196px) {
    font-size: 30px;
    p {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 898px) {
    font-size: 24px;
    p {
      font-size: 24px;
    }
  }
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
  @media only screen and (max-width: 1196px) {
    grid-column: 1/4;
  }
  @media only screen and (max-width: 898px) {
    font-size: 16px;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 565px) {
    font-size: 15px;
    p {
      font-size: 15px;
    }
  }
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

  @media only screen and (max-width: 1196px) {
    padding: 70px 80px 73px 100px;
    grid-template-columns: 1fr;
    grid-row-gap: 60px;
    ${Paragraph} {
      font-size: 30px;
    }
    ol {
      padding-right: 12px;
    }
    li {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 898px) {
    padding: 70px 50px 73px;
    ${Paragraph} {
      font-size: 24px;
    }
    ol {
      padding-right: 12px;
    }
    li {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 565px) {
    padding: 60px 30px;
  }
`

const InteractiveSectionStyles = styled.section`
  padding: 0 102px 0;
  margin: 82px 0;

  @media only screen and (max-width: 898px) {
    padding: 0 30px 0;
    margin: 60px 0;
  }

  @media only screen and (max-width: 565px) {
    margin: 50px 0;
  }
`

const ParagraphSectionStyles = styled.section`
  padding: 24px 102px 0;
  p {
    font-family: "Lato";
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 898px) {
    padding: 24px 50px 0;
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 898px) {
    padding: 24px 30px 0;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1326px) {
    padding: 78px 102px 0;
  }
  @media only screen and (max-width: 1196px) {
    padding: 78px 0 0;
  }
  @media only screen and (max-width: 565px) {
    padding: 41px 0 0;
  }
`

const StyledButtonsWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1380px) {
    padding: 80px 270px 100px;
  }
  @media only screen and (max-width: 1140px) {
    padding: 80px 12% 100px;
  }
  @media only screen and (max-width: 798px) {
    padding: 60px 30px 100px;
  }
  @media only screen and (max-width: 565px) {
    padding: 50px 30px 100px;
  }
  @media only screen and (max-width: 414px) {
    flex-direction: column;
    align-items: stretch;
    button {
      width: 100%;
    }
    a:last-child {
      margin-top: 12px;
    }
  }
`

const StyledVideoWrapper = styled.div`
  @media only screen and (max-width: 1196px) {
    margin: 0 !important;
    height: 372px;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 !important;
    height: 302px;
  }
  @media only screen and (max-width: 500px) {
    margin: 0 !important;
    height: 262px;
  }
  @media only screen and (max-width: 430px) {
    margin: 0 !important;
    height: 202px;
  }
  @media only screen and (max-width: 360px) {
    margin: 0 !important;
    height: 160px;
  }
`

const LessonLayout = ({ data, pageContext }) => {
  const {
    datoCmsLesson: { lessonTitle, lessonNumber, lekcjaPoziom, lessonContent },
  } = data

  const { prev, next } = pageContext

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

  return (
    <>
      <Helmet
        title={`Vacanze Romane | ${lessonNumber.split(" ")[1]} ${lessonTitle}`}
        defer={false}
      />
      <PageHeader
        paragraph={lessonTitle}
        subheader={lessonNumber}
        withNav
        bg="green"
        lesson
      />
      <Wrapper padding="0" bg="white">
        <StyledContentWrapper direction="column" padding="78px 122px 0">
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
                      rel="noreferrer"
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
                  <StyledVideoWrapper style={{ marginLeft: "70px" }}>
                    <a
                      href={block.linkDoWideo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ReactPlayer
                        light
                        width="100%"
                        height="100%"
                        url={block.linkDoWideo}
                        playIcon={
                          <IoPlayCircleSharp size="135px" color="gray" />
                        }
                      />
                    </a>
                  </StyledVideoWrapper>
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
                    title={`interaktywne ćwiczenie ${lessonTitle}`}
                    src={block.link}
                    style={{ border: "0", width: "100%", height: "500px" }}
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                  ></iframe>
                </InteractiveSectionStyles>
              )}
            </React.Fragment>
          ))}
        </StyledContentWrapper>
        <StyledButtonsWrapper
          justifyContent="space-between"
          padding="80px 370px 100px"
        >
          <Link to={prevLink}>
            <Button
              bg="green"
              disabled={prevLink === null}
              arrowLeft
              text="Poprzednia"
            />
          </Link>
          <Link to={nextLink}>
            <Button
              bg="green"
              disabled={nextLink === null}
              arrowRight
              text="Następna"
            />
          </Link>
        </StyledButtonsWrapper>
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
