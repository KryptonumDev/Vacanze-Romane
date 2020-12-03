import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../../assets/styles/HomeStyles"
import { Wrapper } from "../Wrapper/Wrapper"

export const PageHeaderStyles = styled.ul`
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
    color: ${({ bg }) =>
      bg === "green" ? "var(--beige-2)" : bg === "red" ? "var(--beige-2)" : ""};
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: -3px;
      top: calc(50% - 2px);
      width: calc(100% + 6px);
      height: 6px;
      z-index: -1;
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : ""};
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &.active:after,
    &:hover:after {
      transform: scaleY(1);
    }
  }
`

const PageHeaderNav = ({ items = [], bg }) => {
  return (
    <ContentWrapper bg={bg} padding="40px 56px 40px 102px">
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
