import { FaFacebookF } from "react-icons/fa"
import styled from "styled-components"
import Row from "./Row"
import Logo from "./Logo"
import Heading from "./Heading"
import { NavLink } from "react-router-dom"

const StyledFooterContainer = styled.footer``

const StyledFooter = styled.div`
  background-color: var(--color-black);
  padding: 6.6rem 36rem;
  color: #fff;
`

const StyledCopyright = styled.div`
  padding: 2rem 7.8rem;
  background-color: #111e22;
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2px;
  letter-spacing: -1px;
  font-weight: 400;

  span {
    font-size: 1.5rem;
  }
`

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    display: inline-block;
    width: 5.5rem;
    height: 5.5rem;
    border: 2px solid var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: #fff;
    width: 2rem;
    height: 2rem;
  }
`

const StyledHr = styled.hr`
  width: 100%;
  margin-top: 5.2rem;
  margin-bottom: 5.2rem;
  border-color: rgba(255, 255, 255, 15%);
`

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledItem = styled.div`
  h6 {
    color: #fff;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  ul {
    display: grid;
    gap: 1rem;
  }

  a {
    display: inline-block;
    color: #fff;
    width: 100%;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 2;
    letter-spacing: -1px;
    transition: all 0.2s;
  }
`

const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.4rem;
  align-items: center;
  font-size: 1.7rem;
  line-height: calc(1.7rem * 1.5);

  div {
    font-weight: 700;
  }

  p {
    font-weight: 300;
    letter-spacing: -1px;
  }
`

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <Row type="horizontal" gap="0">
          <Logo />

          <StyledList>
            <li>
              <a href="https://google.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://google.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://google.com">
                <FaFacebookF />
              </a>
            </li>
          </StyledList>
        </Row>

        <StyledHr />

        <StyledContent>
          <StyledItem>
            <Heading as="h6">Explore</Heading>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/appointments">Appointments</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </StyledItem>
          <StyledItem>
            <Heading as="h6">Keep in Touch</Heading>
            <StyledInfo>
              <div>Address:</div>
              <p>24A Kingston St, Los Vegas NC 28202, USA.</p>

              <div>Mail:</div>
              <p>aben@gmail.com</p>

              <div>Phone:</div>
              <p>(08)957-957-957</p>
            </StyledInfo>
          </StyledItem>
          <StyledItem>
            <Heading as="h6">Working Hours</Heading>
            <StyledInfo>
              <div>Mon to Fri:</div>
              <p>7am - 6pm</p>

              <div>Sat:</div>
              <p>9am - 7pm</p>

              <div>Sun:</div>
              <p>9am - 6pm</p>
            </StyledInfo>
          </StyledItem>
        </StyledContent>
      </StyledFooter>

      <StyledCopyright>
        <span>&copy;</span> Copyright 2024 ABen Chang. All rights reserved.
      </StyledCopyright>
    </StyledFooterContainer>
  )
}

export default Footer
