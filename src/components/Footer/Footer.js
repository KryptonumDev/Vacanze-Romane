import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { ContentWrapper, Flex } from "../../assets/styles/HomeStyles"
import useWindowSize from "../../utils/useWindowSize"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const NavList = [
  {
    title: "Na skróty",
    items: [
      { name: "Ciao!", link: "/" },
      { name: "in italiano", link: "/in-italiano" },
      { name: "Bottega", link: "/bottega" },
      { name: "o mnie", link: "/o-mnie" },
    ],
  },
  {
    title: "Włoski od zera",
    items: [
      { name: "Wprowadzenie!", link: "/wloski-od-zera" },
      { name: "Część pierwsza", link: "/wloski-od-zera" },
      { name: "Kontynuacja", link: "/wloski-od-zera" },
    ],
  },
  {
    title: "Jestem tutaj",
    items: [
      {
        name: "Facebook!",
        href: "https://www.facebook.com/italiano.Vacanze.Romane/",
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCXqPFvurDxiAFJknjZC5UbQ",
      },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  },
]

const NavStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 798px) {
    flex: 1 1 50%;
    margin-right: 0;
    margin-top: 40px;
  }

  h3 {
    margin: 0 2px 30px 0;
    @media only screen and (max-width: 798px) {
      margin: 0 0 24px 0;
    }
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.45em;
    letter-spacing: 1px;
    color: ${({ bg }) => (bg === "light" ? "var(--brown)" : "var(--beige-2)")};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 6px 0 0 -12px;
  }

  a {
    font-family: Lato;
    font-size: 13px;
    font-weight: normal;
    line-height: 1.12;
    letter-spacing: 1px;
    color: ${({ bg }) => (bg === "light" ? "var(--brown)" : "var(--beige-2)")};
    text-decoration: none;
    position: relative;
    padding: 6px 12px;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;

      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "brown"
          ? "var(--light-brown)"
          : bg === "blue"
          ? "var(--light-blue)"
          : "var(--beige-2)"};
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &.active:after,
    &:hover:after,
    &.italiano:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
    &.italiano:after {
      transform: scaleY(0);
    }
  }
`

const StyledLink = styled(Link)`
  &:after {
    transform: ${({ italiano }) => italiano && "scaleY(0)"};
  }
`

const FooterNavigation = ({ bg }) => (
  <>
    {NavList.map(column => (
      <NavStyles key={column.title} bg={bg}>
        <h3>{column.title}</h3>
        <ul>
          {column.items.map(item => (
            <React.Fragment key={item.name}>
              {item.link ? (
                <li>
                  <StyledLink
                    activeClassName="active"
                    className={item.link.includes("wloski") && "italiano"}
                    to={item.link}
                  >
                    {item.name}
                  </StyledLink>
                </li>
              ) : (
                <li>
                  <a href={item.href}>{item.name}</a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </NavStyles>
    ))}
  </>
)

const FooterStyles = styled.footer`
  h1 {
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.11;
    letter-spacing: 1px;
    color: ${({ bg }) => (bg === "light" ? "var(--brown)" : "var(--beige-2)")};
  }

  ${({ bg }) =>
    bg === "red"
      ? css`
          color: var(--beige-2);
        `
      : bg === "green"
      ? css`
          color: var(--beige-2);
        `
      : bg === "brown"
      ? css`
          color: var(--beige-2);
        `
      : bg === "blue"
      ? css`
          color: var(--beige-2);
        `
      : css`
          color: var(--brown);
        `}
`

const FooterText = styled(motion.p)`
  text-align: center;
  margin: 30px 20px;
  color: ${({ color }) => (color ? color : "white")};
  font-family: "Lato";
  font-size: 14px;
  line-height: 0.86em;
  letter-spacing: 1px;
  @media only screen and (max-width: 798px) {
    font-size: 10px;
    line-height: 12px;
    margin: 10px 0px 30px;
  }
  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "white")};
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
          : bg === "brown"
          ? "var(--light-brown)"
          : bg === "blue"
          ? "var(--light-blue)"
          : "var(--beige-2)"};
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

const StyledWrapper = styled(Wrapper)``

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1051px) {
    padding: 0 65px 105px;
  }
  @media only screen and (max-width: 798px) {
    padding: 32px 30px 50px;
    flex-wrap: wrap;
  }
`

const LineWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1051px) {
    padding: 0 65px;
  }
  @media only screen and (max-width: 798px) {
    padding: 0 30px;
  }
`

const StyledHeaderFlex = styled(Flex)`
  @media only screen and (max-width: 1051px) {
    flex: 1 1 30%;
  }
  @media only screen and (max-width: 798px) {
    flex: 1 1 100%;
  }
`

const StyleNavigationWrapper = styled(Flex)`
  @media only screen and (max-width: 1051px) {
    flex: 2 2 auto;
  }
  @media only screen and (max-width: 798px) {
    margin-top: 0;
    flex: 1 1 100%;
    flex-wrap: wrap;
  }
`

const Footer = ({ bg }) => {
  const width = useWindowSize()
  return (
    <FooterStyles bg={bg}>
      <Wrapper padding="62px 0 0" bg={bg} margin="0">
        <StyledContentWrapper padding="0 105px 118px 105px" direction="row">
          <StyledHeaderFlex flex="1">
            <h1>Vacanze Romane</h1>
          </StyledHeaderFlex>
          <StyleNavigationWrapper flex="1">
            <FooterNavigation bg={bg} />
          </StyleNavigationWrapper>
        </StyledContentWrapper>

        <LineWrapper padding="0 105px 0px 105px" direction="column">
          <Line
            margin="0"
            height={width > 798 ? "2px" : "1px"}
            bg={
              bg === "red"
                ? "var(--beige-2)"
                : bg === "brown"
                ? "var(--beige-2)"
                : bg === "blue"
                ? "var(--beige-2)"
                : bg === "green"
                ? "var(--beige-2)"
                : ""
            }
          />
          <FooterText
            bg={bg}
            color={
              bg === "red"
                ? "var(--beige-2)"
                : bg === "green"
                ? "var(--beige-2)"
                : bg === "brown"
                ? "var(--beige-2)"
                : bg === "blue"
                ? "var(--beige-2)"
                : "var(--brown)"
            }
          >
            Stronę stworzyli:{" "}
            <motion.a href="https://agathadesign.co.uk">Agatha Design</motion.a>{" "}
            &{" "}
            <motion.a href="https://kryptonumstudio.com">
              Kryptonum Studio
            </motion.a>
          </FooterText>
        </LineWrapper>
      </Wrapper>
    </FooterStyles>
  )
}

export default Footer
