import styled from "styled-components"
import Heading from "./Heading"

const StyledItem = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #9bb7bf;

  p {
    color: #555;
    line-height: calc(1.8rem * 1.65);
    letter-spacing: calc(1.8rem * 0.02);
  }
`

const StyledHeader = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 0.5rem;

  hr {
    width: 100%;
    border-top: 3px dotted #000;
  }
`
const StyledPrice = styled.div`
  color: var(--color-grey);
  font-size: 2.2rem;
  font-weight: 400;
  font-family: "Playfair Display", serif;
  line-height: calc(2.2rem * 1.3);
  letter-spacing: calc(2.2rem * 0.05);

  span {
    color: #555;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: calc(1.8rem * 1.65);
    letter-spacing: calc(1.8rem * 0.02);
  }
`

interface MenuItemProps {
  service: {
    service: string
    price: number
    description: string
    id: number
  }
}

function MenuItem({ service }: MenuItemProps) {
  return (
    <StyledItem>
      <StyledHeader>
        <Heading as="h6">{service.service}</Heading>

        <hr />

        <StyledPrice>
          <span>from</span> ${service.price}
        </StyledPrice>
      </StyledHeader>

      <p>{service.description}</p>
    </StyledItem>
  )
}

export default MenuItem
