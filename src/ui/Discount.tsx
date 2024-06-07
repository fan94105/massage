import styled from "styled-components"
import DiscountItem from "./DiscountItem"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13rem 0;
  background-color: var(--color-bg);
`

const StyledDiscount = styled.div`
  width: 54.5vw;
`

function Discount() {
  return (
    <SectionContainer>
      <StyledDiscount>
        <DiscountItem />
      </StyledDiscount>
    </SectionContainer>
  )
}

export default Discount
