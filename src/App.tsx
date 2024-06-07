import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import AppLayout from "./ui/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import ScrollToTop from "./utils/ScrollToTop"
import Blog from "./pages/Blog"
import BlogSingle from "./pages/BlogSingle"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:blogId" element={<BlogSingle />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <GlobalStyles />
    </>
  )
}

export default App
