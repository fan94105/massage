import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"
import Logo from "./Logo"
import Button from "./Button"
import {
  HiOutlineBars3,
  HiOutlineCalendar,
  HiOutlineXMark,
} from "react-icons/hi2"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { tablet } from "../styles/device"
import { useEffect, useState } from "react"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: #fff;
  padding: 2rem 4rem 2.2rem;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 999;
`

const StyledDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  ${(props) =>
    tablet(css`
      flex-direction: column;

      position: fixed;
      inset: 0;
      z-index: 10000;
      background-color: #fff;
      padding: 10rem;
      box-shadow: 0 0 0 20rem #fff;
      border-radius: 50%;

      transition: all 350ms ease-out;

      ${props.isOpen
        ? css`
            transform: translate(0, 0);
            transition: transform 350ms ease-out;
            opacity: 1;
          `
        : css`
            transform: translate(100%, -100%);
            opacity: 0;
          `}
    `)}
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.2rem;

  li {
    padding: 1rem;
    border: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid var(--color-primary-dark);
    }

    ${tablet(css`
      border-bottom: 1px solid #ccc;
      text-align: center;
    `)}
  }

  ${tablet(css`
    flex-direction: column;
    align-items: unset;
    gap: 4rem;

    width: 50%;
  `)}
`

const StyledSocialUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.2rem;

  ${tablet(css`
    display: none;
  `)}
`

const StyledNavLink = styled(NavLink)`
  font-size: 1.6rem;
  color: #555;
`

const StyledA = styled.a`
  padding: 0.4rem;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: var(--color-grey);
  }
`

const StyledToggleBtn = styled.button`
  display: none;
  position: relative;
  z-index: 10000;

  svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-primary-dark);
    cursor: pointer;
  }

  ${tablet(css`
    display: block;
  `)}
`

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function close() {
    setMenuOpen(false)
  }

  function handleClick() {
    setMenuOpen((open) => !open)
  }

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <StyledNav>
      <Logo />

      <StyledDiv isOpen={menuOpen}>
        <StyledUl>
          <li>
            <StyledNavLink to="/" onClick={close}>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" onClick={close}>
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/services" onClick={close}>
              Services
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact" onClick={close}>
              Contact
            </StyledNavLink>
          </li>
        </StyledUl>

        <StyledSocialUl>
          <li>
            <StyledA href="https://google.com">
              <FaFacebookF />
            </StyledA>
          </li>
          <li>
            <StyledA href="https://google.com">
              <FaInstagram />
            </StyledA>
          </li>
        </StyledSocialUl>

        <Button>
          <HiOutlineCalendar />
          <span>Reservation</span>
        </Button>
      </StyledDiv>

      <StyledToggleBtn onClick={handleClick}>
        {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
      </StyledToggleBtn>
    </StyledNav>
  )
}

export default Navbar
