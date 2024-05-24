import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import TestimonialCard from "../../ui/TestimonialCard"

const StyledTestimonials = styled.section`
  padding: 14rem 36rem;
  background-color: var(--color-bg);
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
  )
}

export default Testimonials
