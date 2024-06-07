import styled from "styled-components"
import Button from "../../ui/Button"
import BlogBox from "../../ui/BlogBox"

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14.2rem 0 12rem;
`

const StyledAllBlog = styled.div`
  width: 62.5vw;
`

const StyledBlogs = styled.div`
  margin-bottom: 6rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  column-gap: 4.4rem;
  row-gap: 6rem;
`

const StyledBtnRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  {
    id: 4,
    date: new Date(),
    author: "ABen Chang",
    title: "The best and perfect skincare strategy",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://plus.unsplash.com/premium_photo-1661342494514-ea0a91375ae4?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    date: new Date(),
    author: "ABen Chang",
    title: "Fell the natural reverse aging process",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://images.unsplash.com/photo-1552373438-9be21778554d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    date: new Date(),
    author: "ABen Chang",
    title: "How to make the make-up stay last",
    content:
      "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

function AllBlog() {
  return (
    <SectionContainer>
      <StyledAllBlog>
        <StyledBlogs>
          {fakeData.map((blog) => (
            <BlogBox key={blog.id} blog={blog} />
          ))}
        </StyledBlogs>
        <StyledBtnRow>
          <Button variation="secondary">View more stories</Button>
        </StyledBtnRow>
      </StyledAllBlog>
    </SectionContainer>
  )
}

export default AllBlog
