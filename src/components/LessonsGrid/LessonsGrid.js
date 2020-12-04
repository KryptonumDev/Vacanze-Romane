import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import styled from "styled-components"
import Lesson from "../Lesson/Lesson"

const LessonsGridStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 53px 73px;
`

const LessonsGrid = ({ lessons }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      {lessons.length > 0 ? (
        <LessonsGridStyles>
          {lessons.map(lesson => (
            <Lesson key={lesson.id} lesson={lesson} />
          ))}
        </LessonsGridStyles>
      ) : (
        <>
          <h1>There are no lessons yet. sry</h1>
        </>
      )}
    </AnimateSharedLayout>
  )
}

export default LessonsGrid
