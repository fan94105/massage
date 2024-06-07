import styled from "styled-components"
import Heading from "./Heading"
import { NavLink } from "react-router-dom"

const StyledBlogBox = styled(NavLink)`
  background-color: #edf5f7;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1.14 / 1;
    transition: all 0.2s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`

const StyledImg = styled.div`
  max-height: 32.5rem;
  overflow: hidden;
`

const StyledInfo = styled.div`
  padding: 3rem 2.6rem;

  h6 {
    margin-bottom: 1.4rem;
  }
`

const StyledAuthor = styled.div`
  color: var(--color-primary-dark);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: calc(1.3rem * 1.25);
  letter-spacing: calc(1.3rem * 0.06);
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  span {
    color: #272d32;
  }
`

const StyledContent = styled.p`
  color: #555;
  line-height: calc(1.8rem * 1.55);
  letter-spacing: calc(1.8rem * 0.02);
`

interface BlogBoxProps {
  blog: IBlog
}

function BlogBox({ blog }: BlogBoxProps) {
  return (
    <StyledBlogBox to={`/blog/${blog.id}`}>
      <StyledImg>
        <img src={blog.image} alt="massage" />
      </StyledImg>

      <StyledInfo>
        <StyledAuthor>
          28th May 2024 <span>&mdash;</span> By {blog.author}
        </StyledAuthor>

        <Heading as="h6">{blog.title}</Heading>

        <StyledContent>{blog.content}</StyledContent>
      </StyledInfo>
    </StyledBlogBox>
  )
}

export default BlogBox
