import styled from "styled-components"
import Tag from "./Tag"
import Heading from "./Heading"
import DiscountLabel from "./DiscountLabel"
import Modal from "./Modal"
import Form from "./Form"
import Button from "./Button"

const StyledDiscountItem = styled.div``

const StyledHeader = styled.header`
  margin-bottom: 1.4rem;
  text-align: center;
`

const StyledP = styled.p`
  line-height: calc(1.8rem * 1.75);
  color: #555;
  margin-bottom: 3.7rem;
`

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.7rem;
`

function DiscountItem() {
  return (
    <StyledDiscountItem>
      <Modal>
        <StyledHeader>
          <Tag>Flat discount</Tag>

          <Heading as="h3">
            Claim upto 50% off er on ‍the most popular services...
          </Heading>
        </StyledHeader>

        <StyledP>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, buying to injected
          humour, or randomised words.
        </StyledP>

        <StyledRow>
          <DiscountLabel />

          <Modal.Open target="appointment">
            <Button>Get an appointment</Button>
          </Modal.Open>
        </StyledRow>

        <Modal.Window name="appointment">
          <Form />
        </Modal.Window>
      </Modal>
    </StyledDiscountItem>
  )
}

DiscountItem.defaultProps = {
  align: "start",
}

export default DiscountItem
