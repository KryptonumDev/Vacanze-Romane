import { Link } from "gatsby"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
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
  max-height: 144px;
  transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

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
  &:hover div {
    opacity: 1;
    svg {
      transform: translateX(4px);
    }
  }

  /* &:hover h3:after,
  &:focus h3:after {
    transform: scaleY(1);
  } */
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
      <SeeMore text="Przejdź" />
    </LessonStyles>
  )
}

const SeemoreStyles = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--brown);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--beige-2);
  opacity: 0;
  transform-origin: left center;
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  z-index: 2;

  span {
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: 1px;
    font-family: "Lato" !important;
    color: var(--beige-2) !important;
    text-transform: none !important;
    transition: opacity 0.2s 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    margin-right: 12px;
  }
  svg {
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
`

export const SeeMore = ({ text }) => (
  <SeemoreStyles>
    <span>{text}</span> <BsArrowRight size="24px" color="var(--beige-2)" />
  </SeemoreStyles>
)

export default Lesson
