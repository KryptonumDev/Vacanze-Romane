import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import Search from "../Search/Search"
import { FiMenu, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { useLocation } from "@reach/router"
import { useMenuDispatch, useMenuState } from "../contexts/mobileMenuContext"
import { fadeOutAnimation } from "../animations"

const NavigationWrapper = styled.nav`
  background-color: var(--bg-home);
  transition: background-color 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  a {
    text-decoration: none;
    color: var(--brown);
    &:after {
      background-color: var(--beige-2);
      transition: background-color 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
  }

  ${({ bg }) =>
    bg === "light"
      ? css`
          background-color: var(--bg-home);
          a {
            color: var(--brown);
            &:after {
              background-color: var(--beige-2);
            }
          }
        `
      : bg === "green"
        ? css`
          background-color: var(--dead-green);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-green);
            }
          }
        `
        : bg === "brown"
          ? css`
          background-color: var(--brown);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-brown);
            }
          }
        `
          : bg === "red"
            ? css`
          background-color: var(--dark-red);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-red);
            }
          }
        `
            : bg === "blue" &&
            css`
          background-color: var(--blue);
          a {
            color: var(--beige-2);
            &:after {
              background-color: var(--light-blue);
            }
          }
        `}
`

const Logo = styled.span`
  font-family: "Lato";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 6;
  a {
    padding: 24px 12px;
    display: flex;
    align-items: center;
  }

  img {
    width: 36px;
    margin-right: 10px;
  }

  @media only screen and (max-width: 1105px) {
    a {
      padding: 6px 12px 6px 0;
    }
    img {
      width: 28px;
      margin-right: 6px;
    }
  }
`

const NavigationList = styled(motion.ul)`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
  list-style: none;
  z-index: 1;
  padding-right: 60px;

  @media only screen and (max-width: 1105px) {
    visibility: hidden;
    display: none;
  }
  a {
    font-family: "Cormorant Garamond";
    position: relative;
    padding: 24px 12px;
    margin: 0 12px 0 0;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active:after,
    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
  }
`

const MobileNavigationList = styled(motion.ul)`
  display: flex;
  list-style: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-right: 0;
    background-color: ${({ bg }) =>
    bg === "green"
      ? "var(--dead-green)"
      : bg === "red"
        ? "var(--dark-red)"
        : bg === "blue"
          ? "var(--blue)"
          : bg === "brown"
            ? "var(--brown)"
            : "var(--bg-top)"};
    z-index: 5;
    color: var(--beige-2);
  }
  a {
    font-family: "Cormorant Garamond";
    position: relative;
    padding: 24px 12px;
    margin: 0 12px 0 0;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active:after,
    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
    padding: 14px 64px;
    margin: 0;
    &:after {
      height: 11px;
      top: calc(50% - 6px);
    }
  }
`

const Container = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 50px 0 100px;
  justify-content: space-between;
  align-items: center;
  min-height: 89px;
  z-index: 0;
  @media only screen and (max-width: 1105px) {
    padding: 0px 30px;
    min-height: 60px;
  }
`

const NavigationListItem = styled(motion.li)`
  font-size: 18px;
  line-height: 1.11em;
  letter-spacing: 1px;
  @media only screen and (max-width: 1105px) {
    font-size: 24px;
  }
`

const query = graphql`
  {
    allDatoCmsHomePage {
      nodes {
        logo {
          url
        }
      }
    }
  }
`

const Navigation = () => {
  const data = useStaticQuery(query)
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()
  const [bg, setBg] = useState("light")
  let location = useLocation()

  useEffect(() => {
    setBg("brown")
    if (location.pathname === "/") {
      setBg("light")
    }
    if (location.pathname.includes("wloski-od-zera")) {
      setBg("green")
    }
    if (location.pathname.includes("in-italiano")) {
      setBg("blue")
    }

    if (location.pathname.includes("blog")) {
      setBg("red")
    }
    if (
      location.pathname.includes("bottega") ||
      location.pathname.includes("o-mnie") ||
      location.pathname.includes("szukaj")
    ) {
      setBg("brown")
    }
  }, [location])

  return (
    <NavigationWrapper bg={bg}>
      <Container>
        <Logo>
          <Link to="/">
            <img
              src={data.allDatoCmsHomePage.nodes[0].logo.url}
              alt="Girl on a Vespa scooter"
            />
            Vacanze Romane
          </Link>
        </Logo>
        <NavigationList show={show} bg={bg}>
          <Link activeClassName="active" to="/">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              Ciao
            </NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/wloski-od-zera">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              Włoski od Zera
            </NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/in-italiano">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              in italiano
            </NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/blog">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              Blog
            </NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/sklep">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              Bottega
            </NavigationListItem>
          </Link>
          <Link activeClassName="active" to="/o-mnie">
            <NavigationListItem
              bg={bg}
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            >
              O mnie
            </NavigationListItem>
          </Link>
          {show && <Search className="mobile" bg={bg} />}
        </NavigationList>
        <AnimatePresence>
          {show && (
            <MobileNavigationList
              show={show}
              bg={bg}
              variants={fadeOutAnimation}
              initial="hidden"
              animate={{
                opacity: 1,
              }}
              exit="exit"
            >
              <Search mobile className="mobile" bg={bg} />
              <Link activeClassName="active" to="/">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  Ciao
                </NavigationListItem>
              </Link>
              <Link activeClassName="active" to="/wloski-od-zera">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  Włoski od Zera
                </NavigationListItem>
              </Link>
              <Link activeClassName="active" to="/in-italiano">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  in italiano
                </NavigationListItem>
              </Link>
              <Link activeClassName="active" to="/blog">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  Blog
                </NavigationListItem>
              </Link>
              <Link activeClassName="active" to="/sklep">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  Bottega
                </NavigationListItem>
              </Link>
              <Link activeClassName="active" to="/o-mnie">
                <NavigationListItem
                  bg={bg}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  O mnie
                </NavigationListItem>
              </Link>
            </MobileNavigationList>
          )}
        </AnimatePresence>
        {!show && <Search className="desktop" bg={bg} />}
        <MenuToggleButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch({ type: "TOGGLE_MENU" })}
          bg={bg}
          show={show}
        >
          {show ? (
            <IoClose
              color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
              size="28px"
            />
          ) : (
              <FiMenu
                color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
                size="28px"
              />
            )}
        </MenuToggleButton>
        <AnimatePresence>
          {show && (
            <SocialMediaBar
              variants={fadeOutAnimation}
              initial="hidden"
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              }}
              exit="exit"
              bg={bg}
            />
          )}
        </AnimatePresence>
      </Container>
    </NavigationWrapper>
  )
}

const MenuToggleButton = styled(motion.button)`
  z-index: 6;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  position: ${({ show }) => (show ? "fixed" : "absolute")};
  right: 36px;
  top: 16px;

  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px
      ${({ bg }) => (bg === "light" ? "var(--brown)" : "var(--beige-2)")};
  }
  @media only screen and (min-width: 1106px) {
    visibility: hidden;
    display: none;
  }
`

const SocialStyles = styled(motion.ul)`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  padding: 20px;
  background-color: ${({ bg }) =>
    bg === "green"
      ? "var(--light-green)"
      : bg === "red"
        ? "var(--light-red)"
        : bg === "blue"
          ? "var(--light-blue)"
          : bg === "brown"
            ? "var(--light-brown)"
            : "var(--beige-2)"};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    list-style-type: none;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    padding: 8px 16px;
  }
`

const SocialMediaBar = ({ bg }) => (
  <SocialStyles
    variants={fadeOutAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    bg={bg}
  >
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/italiano.Vacanze.Romane/"
      >
        <FiFacebook
          color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
          size="26px"
        />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/vacanze_romane__italiano/"
      >
        <FiInstagram
          color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
          size="26px"
        />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCXqPFvurDxiAFJknjZC5UbQ"
      >
        <FiYoutube
          color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
          size="26px"
        />
      </a>
    </li>
  </SocialStyles>
)

export default Navigation
