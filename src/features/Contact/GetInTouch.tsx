import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import {
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlinePhone,
} from "react-icons/hi2"

const SectionContainer = styled.section`
  padding: 14.4rem 0 11.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledGetInTouch = styled.div`
  width: 62.5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  gap: 12rem;
`

const StyledImg = styled.div`
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

const StyledHeader = styled.header`
  margin-bottom: 2.3rem;

  div {
    margin-bottom: 0.9rem;
  }
`

const StyledP = styled.p`
  color: var(--color-grey);
  margin-bottom: 4.3rem;
`

const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 6.5rem auto;
  gap: 2.7rem;
  align-items: center;

  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledSVG = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border: 2px solid var(--color-primary-light);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50%;
    height: 50%;
    color: var(--color-primary-light);
  }
`

const StyledTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  color: var(--color-grey);
  line-height: calc(2.4rem * 1.25);
  margin-bottom: 0.8rem;
`

const StyledInfoContent = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: calc(1.6rem * 1.25);
  letter-spacing: calc(1.6rem * 0.06);
  color: var(--color-grey);
`

function GetInTouch() {
  return (
    <SectionContainer>
      <StyledGetInTouch>
        <StyledImg>
          <img
            src="https://images.unsplash.com/photo-1611920630418-f587fdc3bf94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </StyledImg>

        <div>
          <StyledHeader>
            <Tag>Get in touch</Tag>

            <Heading as="h3">We are here to help you always...</Heading>
          </StyledHeader>

          <StyledP>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to many
            desktop publishing packages.
          </StyledP>

          <div>
            <StyledInfo>
              <StyledSVG>
                <HiOutlineHome />
              </StyledSVG>

              <div>
                <StyledTitle>Visit Us:</StyledTitle>

                <StyledInfoContent>
                  NO.09a, Downtown, SAN DIEAGO, USA
                </StyledInfoContent>
              </div>
            </StyledInfo>

            <StyledInfo>
              <StyledSVG>
                <HiOutlineEnvelope />
              </StyledSVG>

              <div>
                <StyledTitle>Drop Us :</StyledTitle>

                <StyledInfoContent>support@beautyness.com</StyledInfoContent>
              </div>
            </StyledInfo>

            <StyledInfo>
              <StyledSVG>
                <HiOutlinePhone />
              </StyledSVG>

              <div>
                <StyledTitle>Call Us :</StyledTitle>

                <StyledInfoContent>Call: 1-800-123-9999</StyledInfoContent>
              </div>
            </StyledInfo>
          </div>
        </div>
      </StyledGetInTouch>
    </SectionContainer>
  )
}

export default GetInTouch
