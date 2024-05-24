import styled from "styled-components"
import Banner from "../features/home/Banner"
import Feature from "../features/home/Feature"
import About from "../features/home/About"
import Testimonials from "../features/home/Testimonials"
import Benefits from "../features/home/Benefits"

const StyledHome = styled.section``
function Home() {
  return (
    <StyledHome>
      <Banner />

      <Feature />

      <About />

      <Testimonials />

      <Benefits />
    </StyledHome>
  )
}

export default Home
