import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import PageHeader from "../components/PageHeader/PageHeader"

const LessonLayout = ({ data }) => {
  const {
    datoCmsLesson: {
      id,
      lessonTitle,
      lessonNumber,
      lekcjaPoziom,
      lessonContent,
    },
  } = data
  return (
    <PageHeader
      paragraph={lessonTitle}
      subheader={lessonNumber}
      withNav
      bg="green"
      lesson
    />
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
        }
        ... on DatoCmsSekcjaWideo {
          id
        }
        ... on DatoCmsParagrafZTekstem {
          id
        }
        ... on DatoCmsCwiczenieInteraktywne {
          id
        }
      }
    }
  }
`

export default LessonLayout
