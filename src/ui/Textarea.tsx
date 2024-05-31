import styled from "styled-components"

const Textarea = styled.textarea`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: calc(1.6rem * 1.6);
  border: none;
  outline: none;

  &::placeholder {
    color: #555;
  }
`

export default Textarea
