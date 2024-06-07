import Service from "../features/home/Service"
import Discount from "../ui/Discount"
import SubBanner from "../ui/SubBanner"

function Services() {
  return (
    <>
      <SubBanner
        tag="Our services"
        title="Well Experience Beauty at your Service"
      />

      <Service />

      <Discount />
    </>
  )
}

export default Services
