import styled from "styled-components"
import InputContainer from "./InputContainer"
import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"
import {
  HiOutlineBookOpen,
  HiOutlineEnvelope,
  HiOutlinePencilSquare,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2"

const StyledForm = styled.form`
  display: grid;
  gap: 1.5rem;
  overflow: hidden;
`

function Form() {
  return (
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
  )
}

export default Form
