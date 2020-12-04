import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const LessonLayout = ({ data }) => {
  return <h1>Lesson layout</h1>
}

// export const query = graphql`
//   query MyQuery($id: String!) {
//     datoCmsLesson(id: { eq: $id }) {

//     }
//   }
// `

export default LessonLayout
