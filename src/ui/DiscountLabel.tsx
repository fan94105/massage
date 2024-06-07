import { HiEllipsisHorizontal } from "react-icons/hi2"
import styled, { css } from "styled-components"
import { mobile } from "../styles/device"

const StyledDiscountLabel = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;

  background-color: #fff;
  border: 1px solid #95bfcb;

  ${mobile(css`
    grid-template-columns: 1fr;
    gap: 2rem;
  `)}
`

const StyledContact = styled.div`
  padding: 2rem;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 1.2rem;
  row-gap: 1.6rem;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-primary-dark);
    transform: translateY(-1.2rem);
  }
`

const StyledTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: calc(1.4rem * 1.5);
  letter-spacing: calc(1.4rem * 0.08);

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: calc(1.5rem * 1.5);
    margin-bottom: 0;
  }
`

const StyledDiscountContainer = styled.div`
  width: 100%;
  background-color: #1e2c30;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    grid-row: 1;
  `)}
`

const StyledDiscount = styled.div`
  text-align: center;
  white-space: nowrap;
  padding: 1rem;

  div:first-child {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: calc(1.5rem * 1.75);
    letter-spacing: calc(1.5rem * 0.1);
  }

  div:nth-child(2) {
    font-size: 6rem;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: -2px;

    span {
      font-size: 2.6rem;
      font-weight: 200;
      margin-left: -0.8rem;
    }
  }

  div:last-child {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: calc(1.8rem * 1.75);
  }
`

function DiscountLabel() {
  return (
    <StyledDiscountLabel>
      <StyledContact>
        <HiEllipsisHorizontal />

        <StyledTitle>
          MAIL US :<br />
          <p>info@beautyness.com</p>
        </StyledTitle>

        <HiEllipsisHorizontal />

        <StyledTitle>
          CALL US :<br />
          <p>(+22) 123 4568 009</p>
        </StyledTitle>
      </StyledContact>

      <StyledDiscountContainer>
        <StyledDiscount>
          <div>- GET FLAT -</div>
          <div>
            50 <span>%</span>
          </div>
          <div>Discount</div>
        </StyledDiscount>
      </StyledDiscountContainer>
    </StyledDiscountLabel>
  )
}

export default DiscountLabel
