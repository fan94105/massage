import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import Button from "../../ui/Button"

const SectionContainer = styled.section`
  padding: 15rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFollow = styled.div`
  width: 62.5vw;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  row-gap: 4.6rem;
  margin-bottom: 6rem;
`

const StyledBtnRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLeft = styled.div`
  padding-right: 5.2rem;

  p {
    font-size: 1.8rem;
    line-height: calc(1.8rem * 1.75);
    color: #555;
    margin-bottom: 5.3rem;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1.14;
  }
`

const StyledHeader = styled.header`
  margin-bottom: 2.2rem;

  div {
    margin-bottom: 0.9rem;
  }
`

const StyledRight = styled.div`
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 0.75;
  }

  & > img {
    margin-bottom: 4.6rem;
  }
`

function Follow() {
  return (
    <SectionContainer>
      <StyledFollow>
        <StyledGrid>
          <StyledLeft>
            <StyledHeader>
              <Tag>Share us</Tag>
              <Heading as="h3">Follow us on Instagram</Heading>
            </StyledHeader>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words many desktop publishing
              packages.
            </p>
            <img
              src="https://plus.unsplash.com/premium_photo-1679520112650-9c2141d81a2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </StyledLeft>
          <StyledRight>
            <img
              src="https://images.unsplash.com/photo-1630835425197-50feeba99ecd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </StyledRight>
        </StyledGrid>
        <StyledBtnRow>
          <Button>Contact us</Button>
        </StyledBtnRow>
      </StyledFollow>
    </SectionContainer>
  )
}

export default Follow
