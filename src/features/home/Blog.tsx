import styled from "styled-components"
import Tag from "../../ui/Tag"
import Heading from "../../ui/Heading"
import BlogBox from "../../ui/BlogBox"
import Button from "../../ui/Button"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 14.5rem 0 15rem;
`

const StyledBlog = styled.div`
  width: 62.5vw;
`

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 4.3rem;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: 4.6rem;

  margin-bottom: 6rem;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`

function Blog() {
  return (
    <SectionContainer>
      <StyledBlog>
        <StyledHeader>
          <Tag>Our blog</Tag>
          <Heading as="h3">Latest Updates</Heading>
        </StyledHeader>

        <StyledContainer>
          <BlogBox />

          <BlogBox />

          <BlogBox />
        </StyledContainer>

        <StyledFooter>
          <Button variation="secondary">View more stories</Button>
        </StyledFooter>
      </StyledBlog>
    </SectionContainer>
  )
}

export default Blog
