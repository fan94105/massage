import styled from "styled-components"
import Heading from "./Heading"

const StyledBlogBox = styled.div`
  background-color: #edf5f7;

  img {
    display: block;
    width: 100%;
  }
`

const StyledInfo = styled.div`
  padding: 3rem 2.6rem;

  h6 {
    margin-bottom: 1.4rem;
  }
`

const StyledAuthor = styled.div`
  color: var(--color-primary-dark);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: calc(1.3rem * 1.25);
  letter-spacing: calc(1.3rem * 0.06);
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  span {
    color: #272d32;
  }
`

const StyledContent = styled.p`
  color: #555;
  line-height: calc(1.8rem * 1.55);
  letter-spacing: calc(1.8rem * 0.02);
`

function BlogBox() {
  return (
    <StyledBlogBox>
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="massage"
      />

      <StyledInfo>
        <StyledAuthor>
          28th May 2024 <span>&mdash;</span> By ABen Chang
        </StyledAuthor>

        <Heading as="h6">Experience the beauty at our beauty spa</Heading>

        <StyledContent>
          The point of using Lorem Ipsum hiter that using making it look like
          others readable will get end.
        </StyledContent>
      </StyledInfo>
    </StyledBlogBox>
  )
}

export default BlogBox
