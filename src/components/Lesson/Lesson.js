import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

const LessonStyles = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 33px 16px 23px;
  background-color: var(--beige-2);
  text-align: center;
  text-decoration: none;
  color: var(--black);

  p {
    font-family: "Lato";
    font-size: 18px;
    line-height: 1.44;
    letter-spacing: 1px;
  }

  h3 {
    font-family: "Cormorant Garamond";
    font-size: 24px;
    font-weight: normal;
    line-height: 1.08;
    letter-spacing: 1px;
    margin: 30px 0 0;
    position: relative;
    padding: 6px 12px;
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;
      background-color: #f9f5e8;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  &:hover h3:after,
  &:focus h3:after {
    transform: scaleY(1);
  }
  &:focus {
    outline: none;
  }
`

const Lesson = ({ lesson }) => {
  return (
    <LessonStyles
      to={`/wloski-od-zera/${slugify(lesson.lekcjaPoziom, {
        lower: true,
      })}/${slugify(lesson.lessonTitle, {
        lower: true,
      })}`}
    >
      <article>
        <p>{lesson.lessonNumber}</p>
        <h3>{lesson.lessonTitle}</h3>
      </article>
    </LessonStyles>
  )
}

export default Lesson
