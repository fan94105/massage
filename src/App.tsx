import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import AppLayout from "./ui/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <GlobalStyles />
    </>
  )
}

export default App
