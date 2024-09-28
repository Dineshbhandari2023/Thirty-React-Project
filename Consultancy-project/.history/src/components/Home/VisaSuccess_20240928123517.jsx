import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";
import Slider from "react-slick";

const VisaSuccess = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider
      {...settings}
      className="flex justify-between text-center gap-4 bg-white m-4"
    >
      <div>
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client3} />
      </div>
      <div>
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client4} />
      </div>
      <div>
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client5} />
      </div>
      <div>
        <img alt="Client Image" className="h-[300px] w-[400px]" src={client6} />
      </div>
    </Slider>
  );
};

export default VisaSuccess;
