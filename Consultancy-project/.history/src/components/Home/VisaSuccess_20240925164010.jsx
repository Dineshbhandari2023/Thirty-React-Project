import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VisaSuccess = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      className="flex justify-between text-center  bg-white"
    >
      <img alt="Client Image" className="h-[]300px" src={client3} />
      <img alt="Client Image" className="size-96" src={client4} />
      <img alt="Client Image" className="size-96" src={client5} />
      <img alt="Client Image" className="size-96" src={client6} />
    </Slider>
  );
};

export default VisaSuccess;
