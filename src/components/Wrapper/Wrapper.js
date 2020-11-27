import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: stretch;
  padding: 50px 0 0;
  background-color: ${({ bg }) => (bg === "light" ? "var(--bg-home)" : "")};
`
