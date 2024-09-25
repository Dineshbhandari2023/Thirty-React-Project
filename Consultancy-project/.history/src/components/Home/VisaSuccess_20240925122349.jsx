import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";

const VisaSuccess = () => {
  return (
    <section className="bg-white">
      <img alt="Client Image" className="size-72" src={client3} />
      <img alt="Client Image" className="size-72" src={client4} />
      <img alt="Client Image" className="size-72" src={client5} />
      <img alt="Client Image" className="size-72" src={client6} />
    </section>
  );
};

export default VisaSuccess;
