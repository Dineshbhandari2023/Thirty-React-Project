import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";

const images = [
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
      {images.map((image, index) => (
        <div>
          <img
            key={index}
            alt="Client Image"
            className="size-96"
            src={image.img}
          />
        </div>
      ))}
    </section>
  );
};

export default VisaSuccess;
