import { HiOutlineStar, HiStar } from "react-icons/hi2"
import styled from "styled-components"

const StyledStarbar = styled.div`
  display: flex;

  input[type="radio"] {
    display: none;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  }
`

interface StarRatingProps {
  star: number
  totalStar?: number
}

function StarRating({ star, totalStar = 5 }: StarRatingProps) {
  const emptyStar = totalStar - star

  return (
    <StyledStarbar>
      {[...Array(star)].map(() => {
        return <HiStar />
      })}
      {[...Array(emptyStar)].map(() => {
        return <HiOutlineStar />
      })}
    </StyledStarbar>
  )
}

export default StarRating
