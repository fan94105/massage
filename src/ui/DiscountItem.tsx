import styled from "styled-components"
import Tag from "./Tag"
import Heading from "./Heading"
import DiscountLabel from "./DiscountLabel"

const StyledDiscountItem = styled.div`
  p {
    line-height: calc(1.8rem * 1.75);
    color: #555;
    margin-bottom: 3.7rem;
  }
`

const StyledHeader = styled.header`
  margin-bottom: 1.4rem;
`

interface DiscountItemProps {
  align?: "center" | "start"
}

function DiscountItem({ align }: DiscountItemProps) {
  return (
    <StyledDiscountItem style={{ textAlign: align }}>
      <StyledHeader>
        <Tag>Flat discount</Tag>

        <Heading as="h3">
          Claim upto 50% off er on ‍the most popular services...
        </Heading>
      </StyledHeader>

      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, buying to injected
        humour, or randomised words.
      </p>

      <DiscountLabel />
    </StyledDiscountItem>
  )
}

DiscountItem.defaultProps = {
  align: "start",
}

export default DiscountItem
