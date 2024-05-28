import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import { IoCheckboxSharp } from "react-icons/io5"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14rem 0 16rem;
`

const StyledBenefits = styled.div`
  width: 62.5vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 4.3rem;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  column-gap: 10.5rem;
  row-gap: 3.5rem;
`

const StyledItem = styled.div`
  svg {
    width: 8rem;
    height: 8rem;
    color: var(--color-primary-dark);
    border: 1px solid #fff;
    outline: 1px dashed var(--color-black);
    margin-bottom: 2rem;
  }

  h5 {
    margin-bottom: 1.1rem;
  }
`

const StyledP = styled.p`
  font-size: 1.8rem;
  color: #555;
  line-height: 1.65;
  letter-spacing: 2px;
  font-weight: 400;
`

function Benefits() {
  return (
    <SectionContainer>
      <StyledBenefits>
        <StyledHeader>
          <Tag>Our awesome benefits</Tag>
          <Heading as="h3">Actually what you'll get from</Heading>
        </StyledHeader>
        <StyledContainer>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
          <StyledItem>
            <IoCheckboxSharp />
            <Heading as="h5">Optimised Energe Efficiency</Heading>
            <StyledP>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </StyledP>
          </StyledItem>
        </StyledContainer>
      </StyledBenefits>
    </SectionContainer>
  )
}

export default Benefits
