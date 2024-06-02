import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import { PiFlowerLotusThin } from "react-icons/pi"

const SectionContainer = styled.section`
  padding: 13rem 0 12.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFeature = styled.div`
  width: 40vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 4.5rem;
`

const StyledList = styled.div`
  display: grid;
`

const StyledItem = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 3.6rem;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3.2rem;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:not(:first-child) {
    margin-top: 3.6rem;
  }
`

const StyledIcon = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #f2fcff;
  border: 1px solid var(--color-black);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 80%;
    height: 100%;
    color: var(--color-primary-dark);
  }
`

const StyledInfo = styled.div`
  h6 {
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.8rem;
    line-height: calc(1.8rem * 1.75);
    color: #555;
  }
`

function Feature() {
  return (
    <SectionContainer>
      <StyledFeature>
        <StyledHeader>
          <Tag>our values</Tag>
          <Heading as="h3">The work values we thrive for</Heading>
        </StyledHeader>

        <StyledList>
          <StyledItem>
            <StyledIcon>
              <PiFlowerLotusThin />
            </StyledIcon>

            <StyledInfo>
              <Heading as="h6">Beauty Experts</Heading>

              <p>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </StyledInfo>
          </StyledItem>

          <StyledItem>
            <StyledIcon>
              <PiFlowerLotusThin />
            </StyledIcon>

            <StyledInfo>
              <Heading as="h6">Beauty Experts</Heading>

              <p>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </StyledInfo>
          </StyledItem>

          <StyledItem>
            <StyledIcon>
              <PiFlowerLotusThin />
            </StyledIcon>

            <StyledInfo>
              <Heading as="h6">Beauty Experts</Heading>

              <p>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </StyledInfo>
          </StyledItem>
        </StyledList>
      </StyledFeature>
    </SectionContainer>
  )
}

export default Feature
