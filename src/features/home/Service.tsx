import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import MenuItem from "../../ui/MenuItem"
import Button from "../../ui/Button"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14.6rem 0 14.5rem;
`

const StyledService = styled.div`
  width: 62.5vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 5rem;
`

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 6.8rem;

  img {
    align-self: center;

    display: block;
    width: 100%;
    max-height: 60vh;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
  }
`

const StyledMenu = styled.div`
  margin-bottom: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

const fakeData = [
  {
    service: "Face masks",
    price: 48,
    description: "The versions have evolved over the sometimes by accident.",
    id: 1,
  },
  {
    service: "Full body massage",
    price: 54,
    description: "The versions have evolved over the sometimes by accident.",
    id: 2,
  },
  {
    service: "Geothermal spa",
    price: 54,
    description: "The versions have evolved over the sometimes by accident.",
    id: 3,
  },
  {
    service: "Sauna relax",
    price: 73,
    description: "The versions have evolved over the sometimes by accident.",
    id: 4,
  },
]

function Service() {
  return (
    <SectionContainer>
      <StyledService>
        <StyledHeader>
          <Tag>Our services</Tag>

          <Heading as="h3">
            We are Experienced in making you very Beautiful
          </Heading>
        </StyledHeader>

        <StyledContent>
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <div>
            <StyledMenu>
              {fakeData.map((service) => (
                <MenuItem key={service.id} service={service} />
              ))}
            </StyledMenu>

            <Button variation="secondary">Get an appointment</Button>
          </div>
        </StyledContent>
      </StyledService>
    </SectionContainer>
  )
}

export default Service
