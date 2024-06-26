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

const fakeData: Array<IBlog> = [
  {
    id: 1,
    date: new Date(),
    author: "ABen Chang",
    title: "The energy efficiency of the hydrotherapy or swim",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    date: new Date(),
    author: "ABen Chang",
    title: "Tips to improve your body via cleansing",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://images.unsplash.com/photo-1533908220087-fbb3911e4853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    date: new Date(),
    author: "ABen Chang",
    title: "Experience the beauty at our beauty spa",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://plus.unsplash.com/premium_photo-1681420615967-dbb8a8c4823e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

function Blog() {
  return (
    <SectionContainer>
      <StyledBlog>
        <StyledHeader>
          <Tag>Our blog</Tag>
          <Heading as="h3">Latest Updates</Heading>
        </StyledHeader>

        <StyledContainer>
          {fakeData.map((blog) => (
            <BlogBox key={blog.id} blog={blog} />
          ))}
        </StyledContainer>

        <StyledFooter>
          <Button variation="secondary">View more stories</Button>
        </StyledFooter>
      </StyledBlog>
    </SectionContainer>
  )
}

export default Blog
