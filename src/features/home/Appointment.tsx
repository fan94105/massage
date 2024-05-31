import styled from "styled-components"
import DiscountItem from "../../ui/DiscountItem"
import InputContainer from "../../ui/InputContainer"
import Input from "../../ui/Input"
import {
  HiOutlineBookOpen,
  HiOutlineEnvelope,
  HiOutlinePencilSquare,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2"
import Button from "../../ui/Button"
import Textarea from "../../ui/Textarea"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13.2rem 0 13.1rem;
  background-color: #edf5f7;
`

const StyledAppointment = styled.div`
  width: 62.5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 11.5rem;
  align-items: center;
`

const StyledForm = styled.form`
  padding: 6.6rem 7.5rem;
  background-color: #fff;
  box-shadow: var(--shadow-md);

  display: grid;
  gap: 1.5rem;
`

function Appointment() {
  return (
    <SectionContainer>
      <StyledAppointment>
        <DiscountItem />

        <StyledForm>
          <InputContainer Icon={HiOutlineUser}>
            <Input id="name" placeholder="Name" />
          </InputContainer>

          <InputContainer Icon={HiOutlineEnvelope}>
            <Input id="email" placeholder="Email" />
          </InputContainer>

          <InputContainer Icon={HiOutlinePhone}>
            <Input id="phone" placeholder="Phone" />
          </InputContainer>

          <InputContainer Icon={HiOutlineBookOpen}>
            <Input id="service" placeholder="Service You Need" />
          </InputContainer>

          <InputContainer Icon={HiOutlinePencilSquare}>
            <Textarea id="note" placeholder="Any Note For Us" rows={3} />
          </InputContainer>

          <Button variation="primary">Get an appointment</Button>
        </StyledForm>
      </StyledAppointment>
    </SectionContainer>
  )
}

export default Appointment
