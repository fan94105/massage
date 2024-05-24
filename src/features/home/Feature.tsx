import styled from "styled-components"
import FeatureBox from "../../ui/FeatureBox"

const StyledFeature = styled.section`
  padding: 15rem 36rem;

  display: grid;
  gap: 10rem;

  /* 避免太小時 overflow */
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`

function Feature() {
  return (
    <StyledFeature>
      <FeatureBox />

      <FeatureBox />

      <FeatureBox />
    </StyledFeature>
  )
}

export default Feature
