import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  font-size: ${({ title }) => (title ? "25px" : "18px")};
  line-height: ${({ title }) => (title ? "1em" : "1.6em")};
  font-weight: ${({ title }) => title && "bold"};
  letter-spacing: -0.03em;
  max-width: 100%;
  width: ${({ width }) => width};
  margin: ${({ margin }) => (margin ? margin : "30px 0")};
`

const Paragraph = ({ children, margin, title, width }) => (
  <StyledParagraph margin={margin} title={title} width={width}>
    {children}
  </StyledParagraph>
)

export default Paragraph
