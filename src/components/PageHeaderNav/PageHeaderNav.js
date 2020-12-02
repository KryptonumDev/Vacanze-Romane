import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../../assets/styles/HomeStyles"
import { Wrapper } from "../Wrapper/Wrapper"

const PageHeaderStyles = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    margin-right: 88px;
    font-family: "Lato";
    font-size: 24px;
    line-height: 0.6em;
    letter-spacing: 1px;
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ bg }) => (bg === "green" ? "var(--beige-2)" : "")};
  }
`

const PageHeaderNav = ({ items = [], bg }) => {
  return (
    <ContentWrapper bg={bg} padding="40px 56px">
      <PageHeaderStyles bg={bg}>
        {items.map(item => (
          <li>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </PageHeaderStyles>
    </ContentWrapper>
  )
}

export default PageHeaderNav
