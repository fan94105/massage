import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import TeamItem from "../../ui/TeamItem"

const SectionContainer = styled.section`
  padding: 12.9rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledOurTeam = styled.div`
  width: 62.5vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 3.3rem;
`

const StyledTeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: 4.5rem;
`

function OurTeam() {
  return (
    <SectionContainer>
      <StyledOurTeam>
        <StyledHeader>
          <Tag>Meet oru experts</Tag>

          <Heading as="h3">The amazing women behind Beautyness</Heading>
        </StyledHeader>

        <StyledTeamContainer>
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </StyledTeamContainer>
      </StyledOurTeam>
    </SectionContainer>
  )
}

export default OurTeam
