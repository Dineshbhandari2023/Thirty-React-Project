import Banner from "./Home/Banner";

import Feature from "./Home/Feature";
import Summary from "./Home/Summary";
// import College from "./Home/College";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Summary />
      {/* <College /> */}

      <Feature />
    </div>
  );
};

export default Hero;
