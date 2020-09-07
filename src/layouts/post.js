import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <Image fixed={data.datoCmsArticle.featuredimage.fixed} />
      <p>{data.datoCmsArticle.author}</p>
      <main>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[2]
          switch (itemKey) {
            case "paragraphContent":
              return <p key={item.id}>{item[itemKey]}</p>
            case "headingContent":
              return <h2 key={item.id}>{item[itemKey]}</h2>
            case "image":
              return <Image key={item.id} fixed={item[itemKey].fixed} />
            default:
              return null
          }
        })}
      </main>
    </div>
  )
}

export const query = graphql`
  query MyQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      author
      featuredimage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed
        }
      }
      id
      title
      articleContent {
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsHeadingContent {
          id
          headingContent
        }
        ... on DatoCmsArticleImage {
          id
          image {
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PostLayout
