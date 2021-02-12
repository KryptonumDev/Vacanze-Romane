import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"

const SEO = ({ meta }) => {
  return <HelmetDatoCms seo={meta} />
}
export default SEO
