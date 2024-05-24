import styled from "styled-components"

const Input = styled.input`
  flex-grow: 1;
  padding: 1.2rem 0;

  font-size: 1.6rem;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--color-grey);
  }
`

export default Input
