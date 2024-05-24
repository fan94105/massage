import styled, { css } from "styled-components"

const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  color: var(--color-grey);
  font-weight: 700;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 7rem;
      line-height: 1.15;
      letter-spacing: -1px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 5.5rem;
      line-height: 1.3;
      letter-spacing: -1.5px;
    `}
      
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 4.5rem;
      line-height: 1.3;
      letter-spacing: -1px;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 4rem;
      line-height: 1.3;
      letter-spacing: -1.5px;
    `}

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2.6rem;
      line-height: 1.3;
      letter-spacing: -1.5px;
    `}

  ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 2.2rem;
      line-height: 1.2;
    `}
`

export default Heading
