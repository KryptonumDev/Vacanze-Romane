import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../../assets/styles/HomeStyles"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"

export const PageHeaderStyles = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  &.blog{
    @media (max-width: 959px) {

      li{
        margin-top: 0 !important;
      }
      flex-direction: row;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      li {
        margin: 28px 0 0 0 !important;
        &:first-child {
          margin: 0 !important;
        }
      }
    }

  }

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

  @media only screen and (max-width: 863px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      margin: 28px 0 0;
      &:first-child {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 577px) {
    li {
      font-size: 18px;
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

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1128px) {
    padding: 40px 56px;
    justify-content: center;
  }
  @media only screen and (max-width: 798px) {
    padding: 36px 20px;
  }
`

const PageHeaderNav = ({ items = [], bg }) => {
  const pathName = useLocation().pathname
  return (
    <StyledContentWrapper bg={bg} padding="40px 56px 40px 102px">
      <PageHeaderStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4 } }}
        exit={{ opacity: 0 }}
        bg={bg}
      >
        {items.map(item => (
          <motion.li key={item.name}>
            <Link
              className={pathName.includes(item.link) ? "active" : ""}
              to={item.link}
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </PageHeaderStyles>
    </StyledContentWrapper>
  )
}

export default PageHeaderNav
