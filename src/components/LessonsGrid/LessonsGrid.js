import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Paragraph } from "../../assets/styles/HomeStyles"
import Lesson from "../Lesson/Lesson"
import Pagination from "../Slider/Pagination"

export const LessonsGridStyles = styled.div`
  width: 100%;
  display: grid;
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

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`

const LessonsGrid = ({ max = 1, lessons = [] }) => {
  return (
    <>
      {lessons.length > 0 ? (
        <LessonsGridStyles>
          {lessons.slice(0, max).map(lesson => (
            <Lesson key={lesson.id} lesson={lesson} />
          ))}
        </LessonsGridStyles>
      ) : (
        <StyledParagraph
          fontSize="36px"
          lineHeight="1.11em"
          letterSpacing="1px"
          fontWeight="400"
          fontFamily="Cormorant Garamond"
        >
          Brak lekcji do wyświetlenia.
        </StyledParagraph>
      )}
    </>
  )
}

export default LessonsGrid
