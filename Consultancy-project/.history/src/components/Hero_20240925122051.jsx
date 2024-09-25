import Banner from "./Home/Banner";
import Feature from "./Home/Feature";
import Summary from "./Home/Summary";
import Testimonials from "./Home/Testimonials";
import VisaSuccess from "./Home/VisaSuccess";
// import College from "./Home/College";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Summary />
      <VisaSuccess />
      <Testimonials />
      <Feature />
    </div>
  );
};

export default Hero;
