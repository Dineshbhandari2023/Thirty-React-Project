import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import ContactUs from "./components/Contact/ContactUs";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";
import AboutUs from "./components/About/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        Example: <Route path="/about" element={<AboutUs />} />
        Example: <Route path="/contact" element={<ContactUs />} />
        Example: <Route path="/blog" element={<Blog />} />
        {/* Example: <Route path="/:id" element={<Post />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
