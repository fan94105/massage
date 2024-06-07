import GetInTouch from "../features/Contact/GetInTouch"
import Map from "../features/Contact/Map"
import SubBanner from "../ui/SubBanner"

function Contact() {
  return (
    <>
      <SubBanner
        tag="Get in touch with us"
        title="We Are Ready To Assist You In 24x7"
        btn={false}
      />

      <GetInTouch />

      <Map />
    </>
  )
}

export default Contact
