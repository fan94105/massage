import SubBanner from "../ui/SubBanner"
import Feature from "../features/about/Feature"
import AboutUs from "../features/about/AboutUs"
import OurTeam from "../features/about/OurTeam"
import Testimonials from "../features/home/Testimonials"
import Follow from "../features/about/Follow"

function About() {
  return (
    <>
      <SubBanner
        tag="Short story about us"
        title="The big story behind, our beautyness center"
      />

      <Feature />

      <AboutUs />

      <OurTeam />

      <Testimonials />

      <Follow />
    </>
  )
}

export default About
