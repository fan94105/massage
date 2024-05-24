import React from "react"
import styled, { css } from "styled-components"

const sizes = {
  small: css`
    padding: 1.7rem 3.2rem;
  `,
  large: css`
    padding: 2.7rem 8.5rem 2.2rem;
  `,
}

const variations = {
  primary: css`
    color: #fff;
    background-color: var(--color-primary-dark);
  `,
  secondary: css`
    color: var(--color-grey);
    box-shadow: 0px 0px 0px 2px var(--color-primary-dark) inset;
  `,
}

type ButtonProps = {
  size?: keyof typeof sizes
  variation?: keyof typeof variations
  children?: React.ReactNode
}

const Button = styled.button<ButtonProps>`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  line-height: 1.6rem;
  box-shadow: var(--shadow-md);
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${(props) => sizes[props?.size || "small"]}
  ${(props) => variations[props?.variation || "primary"]}

  svg {
    width: 1.6rem;
    height: 1.6rem;
    stroke: #fff;
  }
`

export default Button
