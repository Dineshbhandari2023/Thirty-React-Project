import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";

const Images = [
  {
    img: client3,
  },
  {
    img: client4,
  },
  {
    img: client5,
  },
  {
    img: client6,
  },
];

const VisaSuccess = () => {
  return (
    <section className="flex m-2 justify-between text-center p-3 bg-white">
      {Images.map((index, image) => (
        <img
          key={index}
          alt="Client Image"
          className="size-96"
          src={image.img}
        />
      ))}
      {/* <img alt="Client Image" className="size-96" src={client4} />
      <img alt="Client Image" className="size-96" src={client5} />
      <img alt="Client Image" className="size-96" src={client6} /> */}
    </section>
  );
};

export default VisaSuccess;
