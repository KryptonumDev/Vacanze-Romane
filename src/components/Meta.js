import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const Meta = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.author}</h3>
      <p>{data.site.siteMetadata.description}</p>
    </>
  )
}

export default Meta
