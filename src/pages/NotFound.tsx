import styled from "styled-components"
import SubBanner from "../ui/SubBanner"
import Heading from "../ui/Heading"
import Button from "../ui/Button"
import { NavLink } from "react-router-dom"

const SectionContainer = styled.section`
  width: 100%;
  padding: 14rem 0;

  background: url(https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNotFound = styled.div`
  width: 30vw;
  text-align: center;

  h4 {
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.9rem;
    line-height: calc(1.9rem * 1.6);
    letter-spacing: calc(1.9rem * -0.01);
    color: #555;
    margin-bottom: 3.9rem;
  }
`

const Styled404 = styled.div`
  font-size: 12rem;
  font-weight: 900;
  color: var(--color-primary-dark);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 3.9rem;
`

const StyledBtnRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function NotFound() {
  return (
    <>
      <SubBanner tag="Page not found" title="404 Error Page" btn={false} />

      <SectionContainer>
        <StyledNotFound>
          <Styled404>404</Styled404>

          <Heading as="h4">Page not Found!!!</Heading>

          <p>
            The page you are looking for doesn't exist. Please try searching for
            some other page, or return to the website's homepage to find what
            you're looking for.
          </p>

          <StyledBtnRow>
            <NavLink to="/">
              <Button>Back to home</Button>
            </NavLink>
          </StyledBtnRow>
        </StyledNotFound>
      </SectionContainer>
    </>
  )
}

export default NotFound
