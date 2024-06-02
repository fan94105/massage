import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"

const SectionContainer = styled.section`
  padding: 19.2rem 0;
  background-color: var(--color-bg);

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledAboutUs = styled.div`
  width: 62.5vw;
  color: #fff;
  background-color: var(--color-black);
  padding-left: 6.4rem;

  /* display: flex; */
  display: grid;
  grid-template-columns: minmax(200px, 40%) 7.2rem 1fr;
  align-items: center;

  img {
    display: block;
    width: 100%;
    /* height: 45vh; */
    object-fit: cover;
    object-position: center;
    transform: scale(1.2);
  }
`

const StyledContent = styled.div`
  padding: 4rem;
  grid-column: 3;
`

const StyledHeader = styled.header`
  margin-bottom: 1.4rem;

  div,
  h3 {
    color: #fff;
  }

  div {
    margin-bottom: 0.9rem;
  }
`

function AboutUs() {
  return (
    <SectionContainer>
      <StyledAboutUs>
        <img
          src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <StyledContent>
          <StyledHeader>
            <Tag>about us</Tag>
            <Heading as="h3">
              Style is a Reflection of your Attitude & your Personality
            </Heading>
          </StyledHeader>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </p>
        </StyledContent>
      </StyledAboutUs>
    </SectionContainer>
  )
}

export default AboutUs
