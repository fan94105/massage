import styled, { css } from "styled-components"

interface RowProps {
  type: string
  gap?: string
}

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: ${`${props.gap || "1"}rem`};
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: ${`${props.gap || "1.6"}rem`};
    `}
`

export default Row
