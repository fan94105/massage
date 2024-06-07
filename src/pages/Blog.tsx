import AllBlog from "../features/Blog/AllBlog"
import SubBanner from "../ui/SubBanner"

function Blog() {
  return (
    <>
      <SubBanner tag="Beauty blog" title="Articles & News" btn={false} />

      <AllBlog />
    </>
  )
}

export default Blog
