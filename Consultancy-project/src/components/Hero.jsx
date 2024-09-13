// import NavBar from "./Home/NavBar";
import Banner from "./Home/Banner";
import Summary from "./Home/Summary";
import College from "./Home/College";
// import Footer from "./Home/Footer";

const Hero = () => {
  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <Banner />
      <Summary />
      <College />
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
