import styled from "styled-components"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12rem 0;
`

const StyledMap = styled.div`
  width: 62.5vw;
`

function Map() {
  return (
    <SectionContainer>
      <StyledMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11184451.736467134!2d-70.94992578658672!3d73.60529353595447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e753c9b20485bfd%3A0x4e5f0d379253c31!2sArctic!5e0!3m2!1szh-TW!2stw!4v1717405045413!5m2!1szh-TW!2stw"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </StyledMap>
    </SectionContainer>
  )
}

export default Map
