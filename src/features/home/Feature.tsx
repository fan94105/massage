import styled from "styled-components"
import FeatureBox from "../../ui/FeatureBox"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
`

const StyledFeature = styled.div`
  width: 62.5vw;

  display: grid;
  gap: 10rem;

  /* 避免太小時 overflow */
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`

function Feature() {
  return (
    <SectionContainer>
      <StyledFeature>
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
      </StyledFeature>
    </SectionContainer>
  )
}

export default Feature
