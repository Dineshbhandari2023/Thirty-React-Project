import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";
import Slider from "react-slick";

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
      className="flex m-2 justify-between text-center p-3 bg-white"
    >
      <img alt="Client Image" className="size-96" src={client3} />
      <img alt="Client Image" className="size-96" src={client4} />
      <img alt="Client Image" className="size-96" src={client5} />
      <img alt="Client Image" className="size-96" src={client6} />
    </Slider>
  );
};

export default VisaSuccess;
