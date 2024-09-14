import React from "react";
import review from "../../../public/images/review.jpg";
import { Parallax } from "react-parallax";
import client1 from "../../../public/images/client1.jpg";
import client2 from "../../../public/images/client2.jpg";
import client3 from "../../../public/images/client3.jpg";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import Slider from "react-slick";

const data = [
  {
    name: "Client1",
    image: client1, // Use direct reference
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
  {
    name: "Client2",
    image: client2,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
  {
    name: "Client3",
    image: client3,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
  {
    name: "Client4",
    image: client4,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
  {
    name: "Client5",
    image: client5,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
  {
    name: "Client6",
    image: client6,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid, commodi ipsam corporis natus dignissimos deleniti quas. Ipsam cum nobis debitis ducimus ex maiores. Aliquam qui veritatis delectus et aut. Tempore impedit omnis velit sapiente. Reiciendis officiis nostrum perspiciatis repellat corrupti, quasi autem repudiandae? Quos illum odit culpa reprehenderit ex?",
  },
];

const College = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Parallax
      bgImage={review}
      bgImageAlt="review image"
      strength={200}
      className="justify-center text-center"
    >
      <h1 className="w-full bg-white m-2 p-5 text-4xl font-bold text-blue-500 font-sans tracking-wide">
        Abroad Study with our Education Consultancy
      </h1>
      <div className="w-11/12 m-auto z-10">
        <div className="flex gap-9 mt-20">
          <Slider {...settings}>
            {data.map((client, index) => (
              <div
                key={index}
                className="my-5 p-4 h-96 bg-white shadow-lg rounded-lg"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h2 className="text-2xl font-semibold">{client.name}</h2>
                  <p className="text-gray-600 mt-2">{client.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Parallax>
  );
};

export default College;
