import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import {
  SearchProvider,
  useSearchState,
  useSearchDispatch,
} from "../components/contexts/searchContext"

const SearchPage = ({ data }) => {
  const { query } = useSearchState()
  const { dispatch } = useSearchDispatch()

  return (
    <>
      <PageHeader
        paragraph="Search"
        imgFluid={data.datoCmsHomePage.backgroundImage.fluid}
        bg="brown"
        withNav
      />
      <h1>Current query: {query}</h1>
    </>
  )
}
export const query = graphql`
  {
    datoCmsHomePage {
      ciaoTitle
      title
      courseName
      subheader
      backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
export default SearchPage
