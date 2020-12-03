import styled from "styled-components"

export const GridItem = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn && gridColumn};
  grid-row: ${({ gridRow }) => gridRow && gridRow};
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => (cols ? cols : "1fr")};
  grid-template-rows: ${({ rows }) => (rows ? rows : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
`

export default Grid
