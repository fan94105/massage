import styled from "styled-components"
import Tag from "./Tag"
import { FaFacebookF } from "react-icons/fa6"

const StyledTeamItem = styled.div`
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 0.8;
    object-fit: cover;
    object-position: center;
    margin-bottom: 2.5rem;
  }
`

const StyledContent = styled.div`
  text-align: center;
  padding: 0 1.7rem;

  p {
    font-size: 1.8rem;
    line-height: calc(1.8rem * 1.6);
    color: #555;
    margin-bottom: 2.3rem;
  }
`

const StyledName = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: calc(2.4rem * 1.2);
  color: var(--color-grey);
`

const StyledSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey);
  }
`

function TeamItem() {
  return (
    <StyledTeamItem>
      <img
        src="https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <StyledContent>
        <StyledName>ABen Chang</StyledName>

        <Tag>Beautyness expert</Tag>

        <p>
          I must explain to you how all this mistaken idea of denouncing
          pleasure that will araise praising pain
        </p>

        <StyledSocialList>
          <li>
            <a href="https://google.com">
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a href="https://google.com">
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a href="https://google.com">
              <FaFacebookF />
            </a>
          </li>
        </StyledSocialList>
      </StyledContent>
    </StyledTeamItem>
  )
}

export default TeamItem
