import React from "react";
import client4 from "../../../public/images/client4.jpg";
import client5 from "../../../public/images/client5.jpg";
import client6 from "../../../public/images/client6.jpg";
import client3 from "../../../public/images/client3.jpg";

const reviewData = [
  {
    img: client3,
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
const VisaSuccess = () => {
  return (
    <section className="flex m-2 justify-between text-center p-3 bg-white">
      <img alt="Client Image" className="size-96" src={client3} />
      <img alt="Client Image" className="size-96" src={client4} />
      <img alt="Client Image" className="size-96" src={client5} />
      <img alt="Client Image" className="size-96" src={client6} />
    </section>
  );
};

export default VisaSuccess;
