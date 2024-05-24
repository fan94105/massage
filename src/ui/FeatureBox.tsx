import styled from "styled-components"
import Heading from "./Heading"
import Button from "./Button"

const StyledFeatureBox = styled.div`
  display: grid;

  h3 {
    margin-bottom: 1rem;
  }

  img {
    display: block;
    width: 100%;
    margin-bottom: 2.6rem;
  }

  button {
    justify-self: start;
  }
`

const StyledP = styled.p`
  color: #555;
  font-size: 1.8rem;
  line-height: 1.65;
  letter-spacing: 2px;
  margin-bottom: 3rem;
`

function FeatureBox() {
  return (
    <StyledFeatureBox>
      <img
        src="https://plus.unsplash.com/premium_photo-1658507030177-1dab2b3d7410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="massage"
      />

      <Heading as="h5">Spa & Massage</Heading>

      <StyledP>
        If you are going to use a passage offer Lorem Ipsum, you need to be sure
        hidden in the middle of text.
      </StyledP>

      <Button variation="secondary">Read more</Button>
    </StyledFeatureBox>
  )
}

export default FeatureBox
