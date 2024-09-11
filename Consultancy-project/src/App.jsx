import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import ContactUs from "./components/Contact/ContactUs";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Example: <Route path="/about" element={<About />} /> */}
        Example: <Route path="/contact" element={<ContactUs />} />
        Example: <Route path="/blog" element={<Blog />} />
        {/* Example: <Route path="/:id" element={<Post />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
