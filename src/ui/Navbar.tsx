import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Logo"
import Button from "./Button"
import { HiOutlineCalendar } from "react-icons/hi2"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  width: 100%;
  background-color: #fff;
  padding: 2rem 4rem 2.2rem;
  box-shadow: var(--shadow-md);
  position: fixed;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.2rem;
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

function Navbar() {
  return (
    <StyledNav>
      <Logo />

      <StyledDiv>
        <StyledUl>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/services">Services</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </li>
        </StyledUl>

        <StyledUl>
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
        </StyledUl>

        <Button>
          <HiOutlineCalendar />
          <span>Reservation</span>
        </Button>
      </StyledDiv>
    </StyledNav>
  )
}

export default Navbar
