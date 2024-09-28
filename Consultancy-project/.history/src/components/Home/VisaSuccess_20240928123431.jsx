import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";
import Slider from "react-slick";

const VisaSuccess = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  const reviewData = [
    {
      img: client3,
      name: "Kritika Maskey",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula vitae nulla faucibus tristique. Aliquam erat volutpat. Donec non purus et neque placerat convallis. Vestibulum dignissim, est nec consectetur tincidunt, enim mauris dignissim justo, sed lobortis neque velit in justo. Sed vel mi at neque condimentum tristique. Donec",
    },
    {
      img: client4,
      name: "Nawaraj Katwal",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula vitae nulla faucibus tristique. Aliquam erat volutpat. Donec non purus et neque placerat convallis. Vestibulum dignissim, est nec consectetur tincidunt, enim mauris dignissim justo, sed lobortis neque velit in justo. Sed vel mi at neque condimentum tristique. Donec",
    },
    {
      img: client5,
      name: "Rahul Gupta",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula vitae nulla faucibus tristique. Aliquam erat volutpat. Donec non purus et neque placerat convallis. Vestibulum dignissim, est nec consectetur tincidunt, enim mauris dignissim justo, sed lobortis neque velit in justo. Sed vel mi at neque condimentum tristique. Donec",
    },
    {
      img: client6,
      name: "Sandesh Kami",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula vitae nulla faucibus tristique. Aliquam erat volutpat. Donecnon purus et neque placerat convallis. Vestibulum dignissim, est nec consectetur tincidunt, enim mauris dignissim justo, sed lobortis neque velit in justo. Sed vel mi at neque condimentum tristique. Done",
    },
  ];
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
