import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";
import Slider from "react-slick";


const VisaSuccess = () => {
  var settings = {
    dots: true,
    arrow: false
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1
    pauseOnHover: true,
    pauseOnFocus:true
  
  };
  return (
    <Slider
      {...settings}
      className="flex justify-between text-center  bg-white"
    >
      <div className="justify-center text-center">
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client3} />
      </div>
      <div>
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client4} />
      </div>
      <img alt="Client Image" className="h-[300px] w-[400px]" src={client5} />
      <img alt="Client Image" className="h-[300px] w-[400px]" src={client6} />
    </Slider>
  );
};

export default VisaSuccess;
