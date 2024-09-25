import Banner from "./Home/Banner";
import Feature from "./Home/Feature";
import Summary from "./Home/Summary";
import Testimonials from "./Home/Testimonials";
// import College from "./Home/College";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Summary />
      <Testimonials />
      <Feature />
    </div>
  );
};

export default Hero;
