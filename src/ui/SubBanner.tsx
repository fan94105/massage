import styled from "styled-components"
import Tag from "./Tag"
import Heading from "./Heading"
import Button from "./Button"

const SectionContainer = styled.section`
  padding: 11.8rem 0 11.7rem;
  background-color: var(--color-black);

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSubBanner = styled.div`
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

interface SubBannerProps {
  tag: string
  title: string
  btn?: boolean
}

function SubBanner({ tag, title, btn }: SubBannerProps) {
  return (
    <SectionContainer>
      <StyledSubBanner>
        <StyledHeader>
          <Tag>{tag}</Tag>
          <Heading as="h2">{title}</Heading>
        </StyledHeader>

        {btn && <Button>Make a reservation</Button>}
      </StyledSubBanner>
    </SectionContainer>
  )
}

SubBanner.defaultProps = {
  btn: true,
}

export default SubBanner
