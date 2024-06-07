import styled, { css } from "styled-components"
import Heading from "../../ui/Heading"
import Tag from "../../ui/Tag"
import Badge from "../../ui/Badge"
import { PiFlowerLotusThin } from "react-icons/pi"
import { mobile } from "../../styles/device"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  background-color: var(--color-bg);
`

const StyledAbout = styled.div`
  width: 62.5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 12.5rem;
`

const StyledDiv = styled.div`
  h3 {
    margin-bottom: 1.6rem;
  }
`

const StyledP = styled.p`
  color: #555;
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 3.7rem;
`

const StyledImg = styled.span`
  /* position: relative;
  align-self: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 60rem;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow-lg);

    position: relative;
    z-index: 10;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    max-height: 60rem;
    background-color: var(--color-primary-dark);
    position: absolute;
    top: -40px;
    right: -40px;
  } */

  display: flex;
  align-items: flex-end;
  position: relative;

  img {
    display: block;
    width: 90%;
    height: 92%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1.14;
    position: relative;
    z-index: 10;
    box-shadow: var(--shadow-md);
  }

  &::before {
    content: "";
    width: 90%;
    height: 92%;
    background-color: var(--color-primary-dark);
    position: absolute;
    top: 0;
    right: 0;
  }
`

const StyledBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-right: 1.4rem;

  ${mobile(css`
    justify-content: center;
  `)}
`

function About() {
  return (
    <SectionContainer>
      <StyledAbout>
        <StyledDiv>
          <Tag>About us</Tag>
          <Heading as="h3">
            The Beauty is about being Comfortable in your own skin!
          </Heading>
          <StyledP>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </StyledP>
          <StyledBadgeContainer>
            <Badge Icon={PiFlowerLotusThin}>Great Services</Badge>
            <Badge Icon={PiFlowerLotusThin}>Great Services</Badge>
            <Badge Icon={PiFlowerLotusThin}>Great Services</Badge>
          </StyledBadgeContainer>
        </StyledDiv>
        <StyledImg>
          <img
            src="https://images.unsplash.com/photo-1630305130592-210da48f151e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </StyledImg>
      </StyledAbout>
    </SectionContainer>
  )
}

export default About
