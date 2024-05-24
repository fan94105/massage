import React from "react"
import styled from "styled-components"

const StyledInputContainer = styled.div`
  width: 100%;
  border: 1px solid var(--color-primary-dark);
  box-shadow: var(--shadow-sm);

  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke: var(--color-primary-dark);
    margin-left: 2rem;
  }
`

interface InputContainerProps {
  Icon: React.ElementType
  children: React.ReactElement
}

function InputContainer({ Icon, children }: InputContainerProps) {
  return (
    <StyledInputContainer>
      <label htmlFor={children.props.id}>
        <Icon />
      </label>
      {children}
    </StyledInputContainer>
  )
}

export default InputContainer
