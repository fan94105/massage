import React from "react"
import styled from "styled-components"

const StyledInputContainer = styled.div`
  border: 1px solid var(--color-primary-dark);
  box-shadow: var(--shadow-sm);
  background-color: #fff;
  padding: 1.8rem 1.4rem 1.8rem 1.5rem;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke: var(--color-primary-dark);
  }
`

// 使用 focus-within

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
