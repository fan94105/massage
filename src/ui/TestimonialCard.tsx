import styled, { css } from "styled-components"
import StarRating from "./StarRating"
import { tablet } from "../styles/device"

const StyledTestimonialCard = styled.div`
  background-color: #fff;
  width: 100%;
`

const StyledContent = styled.p`
  padding: 4.4rem 4.4rem 4.4rem 4.9rem;
  font-size: 1.9rem;
  line-height: 1.8;
`

const StyledTitle = styled.div`
  padding: 2.5rem 5rem;
  background-color: var(--color-black);
  color: #fff;

  display: grid;
  grid-template-columns: minmax(min(50px, 100%), 1fr) 3fr auto;
  gap: 2rem;

  img {
    align-self: center;

    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1;
    border: 1px solid #fff;
  }
`

const StyledDiv = styled.div`
  align-self: center;

  display: grid;
  gap: 0.2rem;
`

const StyledInfo = styled.div`
  display: grid;

  div:first-child {
    font-size: 2rem;
    line-height: 1.6;
    letter-spacing: -1px;
  }

  div:last-child {
    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: 600;
    letter-spacing: 1px;
  }
`

const StyledPolyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const StyledPoly = styled.span`
  display: inline-block;
  width: 3rem;
  height: 80%;
  background: #fff;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);

  ${tablet(css`
    display: none;
  `)}
`

function TestimonialCard() {
  return (
    <StyledTestimonialCard>
      <StyledContent>
        “ It is a long established fact that a reader will be tracked distracted
        by the readable content of a page is when looking at its layout. The
        point of using Lorem of distribution it look like readable English “
      </StyledContent>

      <StyledTitle>
        <img src="https://i.pravatar.cc/300" alt="avatar" />

        <StyledDiv>
          <StarRating star={4} />

          <StyledInfo>
            <div>ABen Chang</div>

            <div>Taiwan</div>
          </StyledInfo>
        </StyledDiv>

        <StyledPolyContainer>
          <StyledPoly></StyledPoly>
          <StyledPoly></StyledPoly>
        </StyledPolyContainer>
      </StyledTitle>
    </StyledTestimonialCard>
  )
}

export default TestimonialCard
