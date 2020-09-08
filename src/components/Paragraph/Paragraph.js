import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  font-size: ${({ title, fontSize }) =>
    title ? "25px" : fontSize ? fontSize : "18px"};
  letter-spacing: ${({ lineHeight }) => (lineHeight ? lineHeight : "-0.03em")};
  line-height: ${({ title, lineHeight }) =>
    title ? "1em" : lineHeight ? lineHeight : "1.6em"};
  font-weight: ${({ title, fontWeight }) =>
    title ? "bold" : fontWeight ? fontWeight : "normal"};
  max-width: 100%;
  width: ${({ width }) => width};
  margin: ${({ margin }) => (margin ? margin : "30px 0")};
`

const Paragraph = ({
  children,
  margin,
  title,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
}) => (
  <StyledParagraph
    margin={margin}
    title={title}
    width={width}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
  >
    {children}
  </StyledParagraph>
)

export default Paragraph
