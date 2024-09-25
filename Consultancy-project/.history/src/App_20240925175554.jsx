import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import ContactUs from "./components/Contact/ContactUs";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";
import AboutUs from "./components/About/AboutUs";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
