import styled, { css } from "styled-components"
import Button from "../../ui/Button"
import Heading from "../../ui/Heading"
import Tag from "../../ui/Tag"
import { laptop, mobile } from "../../styles/device"

const SectionContainer = styled.section`
  background: linear-gradient(
    to right,
    var(--color-bg) 60%,
    var(--color-black) 60%
  );
  padding: 13rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${laptop(css`
    background: linear-gradient(
      to bottom,
      var(--color-bg) 60%,
      var(--color-black) 60%
    );
  `)}

  ${mobile(css`
    background: linear-gradient(
      to bottom,
      var(--color-bg) 70%,
      var(--color-black) 70%
    );
  `)}
`

const StyledBanner = styled.div`
  width: 62.5vw;
  padding: 5.9rem 6.8rem 5.9rem 0;

  display: grid;
  grid-template-columns: 1fr minmax(200px, 1fr);
  align-items: center;
  gap: 7.2rem;

  img {
    outline: 10px solid var(--color-bg);
    outline-offset: 5rem;
    display: block;
    aspect-ratio: 1.1 / 1;
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow-lg);
  }

  ${laptop(css`
    grid-template-columns: 1fr;
    padding: 0;
  `)}
`

const StyledContent = styled.div`
  ${laptop(css`
    text-align: center;

    button {
      margin: 0 auto;
    }
  `)}
`

const StyledHeader = styled.header`
  margin-bottom: 2.4rem;

  div {
    margin-bottom: 0.7rem;
  }
`

const StyledP = styled.p`
  font-size: 1.9rem;
  color: #555;
  margin-bottom: 3.4rem;
`

function Banner() {
  return (
    <SectionContainer>
      <StyledBanner>
        <StyledContent>
          <StyledHeader>
            <Tag>Welcome to Beautyness!!!</Tag>
            <Heading as="h1">Beauty is power a smile is its sword.</Heading>
          </StyledHeader>
          <StyledP>
            There are many variation of passages are Ipsum available, majority
            have suffered alteration in some form.
          </StyledP>
          <Button>Make a reservation</Button>
        </StyledContent>
        <img
          src="https://plus.unsplash.com/premium_photo-1661274139149-7efb00e27f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </StyledBanner>
    </SectionContainer>
  )
}

export default Banner
