import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import TestimonialCard from "../../ui/TestimonialCard"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14rem 0;
  background-color: var(--color-bg);
`

const StyledTestimonials = styled.div`
  width: 62.5vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`

const StyledTestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.6rem;
`

function Testimonials() {
  return (
    <SectionContainer>
      <StyledTestimonials>
        <StyledHeader>
          <Tag>Testimonials</Tag>
          <Heading as="h3">What our Customers says...</Heading>
        </StyledHeader>
        <StyledTestimonialContainer>
          <TestimonialCard />
          <TestimonialCard />
        </StyledTestimonialContainer>
      </StyledTestimonials>
    </SectionContainer>
  )
}

export default Testimonials
