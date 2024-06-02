import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import Button from "../../ui/Button"

const SectionContainer = styled.section`
  padding: 11.8rem 0 11.7rem;
  background-color: var(--color-black);

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledBanner = styled.div`
  width: 36vw;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`

const StyledHeader = styled.header`
  text-align: center;

  div,
  h2 {
    color: #fff;
  }
`

function Banner() {
  return (
    <SectionContainer>
      <StyledBanner>
        <StyledHeader>
          <Tag>Short story about us</Tag>
          <Heading as="h2">The big story behind, our beautyness center</Heading>
        </StyledHeader>

        <Button>Make a reservation</Button>
      </StyledBanner>
    </SectionContainer>
  )
}

export default Banner
