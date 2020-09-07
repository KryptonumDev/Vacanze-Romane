import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  font-size: 52px;
  font-weight: bold;
  line-height: 1em;
  margin: 16px 0 0;
`

const PageHeader = ({ children }) => <StyledHeader>{children}</StyledHeader>
export default PageHeader
