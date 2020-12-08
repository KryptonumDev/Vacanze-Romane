import React from "react"
import styled, { css } from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import Search from "../Search/Search"
import { FiMenu, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

import { useMenuDispatch, useMenuState } from "../contexts/mobileMenuContext"
import { fadeOutAnimation } from "../animations"
const NavigationWrapper = styled.nav`
  background-color: var(--bg-home);
  a {
    text-decoration: none;
    color: var(--brown);
    &:after {
      background-color: var(--beige-2);
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
      padding: 6px 12px;
    }
    img {
      width: 32px;
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

const Navigation = ({ bg }) => {
  const data = useStaticQuery(query)
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <NavigationWrapper bg={bg}>
      {console.log(data)}
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
          <Link activeClassName="active" to="/bottega">
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
                transition: {
                  delay: -0.2,
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              }}
              exit="exit"
            >
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
              <Link activeClassName="active" to="/bottega">
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
  position: absolute;
  right: 36px;
  top: 16px;

  &::focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ bg }) => (bg === "light" ? "var(--brown)" : "var(--beige-2)")};
  }
  @media only screen and (min-width: 1026px) {
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
        href="https://www.facebook.com/italiano.Vacanze.Romane/"
      >
        <FiFacebook
          color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
          size="26px"
        />
      </a>
    </li>
    <li>
      <a target="_blank" href="">
        <FiInstagram
          color={bg === "light" ? "var(--brown)" : "var(--beige-2)"}
          size="26px"
        />
      </a>
    </li>
    <li>
      <a
        target="_blank"
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
