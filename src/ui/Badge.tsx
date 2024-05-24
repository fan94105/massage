import React from "react"
import styled from "styled-components"
import Heading from "./Heading"

const StyledBadge = styled.div`
  background-color: #fff;
  padding: 1.7rem 3rem 1.9rem;
  border: 1px solid var(--color-grey);

  display: grid;
  gap: 1.4rem;
  justify-items: center;

  svg {
    width: 7rem;
    height: 7rem;
    color: var(--color-primary-light);
  }

  h6 {
    text-align: center;
  }
`

interface BadgeProps {
  Icon: React.ElementType
  children: React.ReactNode
}

function Badge({ Icon, children }: BadgeProps) {
  return (
    <StyledBadge>
      <Icon />
      <Heading as="h6">{children}</Heading>
    </StyledBadge>
  )
}

export default Badge
