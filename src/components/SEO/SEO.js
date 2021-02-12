import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"

const SEO = ({ meta, children }) => {
  return <HelmetDatoCms seo={meta}>{children}</HelmetDatoCms>
}
export default SEO
