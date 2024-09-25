import { IoInformationCircleOutline } from "react-icons/io5";
import banner1 from "../../../public/images/summary.png";
import banner2 from "../../../public/images/summary1.png";
import { FaPaperPlane } from "react-icons/fa";

const Summary = () => {
  return (
    <div>
      <div className="flex justify-between bg-blue-50">
        <div>
          <div className="flex m-4">
            <IoInformationCircleOutline className="size-56 ml-28 text-orange-400" />
            <div className="flex flex-col mt-6">
              <h1 className="justify-start mt-5 mx-8 text-4xl font-serif text-blue-800 font-bold">
                About
              </h1>
              <p className="text-lg mx-8 mt-4">
                We help Nepalese students to make the right Abroad Study
                decisions. Our expertise in the field of overseas education has
                made us a time-tested
              </p>
            </div>
          </div>
          <div className="flex m-4">
            <FaPaperPlane className="size-56 ml-28 text-orange-400" />
            <div className="flex flex-col mt-6">
              <h1 className="justify-start mt-5 mx-8 text-4xl font-serif text-blue-800 font-bold">
                Abroad Study
              </h1>
              <p className="text-lg mx-8 mt-4">
                Global Aspire Education Consultancy -Top | Best Education
                Consultancy of Nepal, assist Nepalese students by giving
                comprehensive information & guidance about study abroad
                opportunities in Dubai.
              </p>
            </div>
          </div>
        </div>

        <div className="m-24">
          <img src={banner1} alt="banenr" className="h-[420px] w-[750px]" />
        </div>
      </div>
      <div className="flex bg-[#265791] p-5 justify-between">
        <div>
          <h1 className="uppercase px-16 text-4xl font-semibold text-white">
            Take the First step to knowledge with us
          </h1>
          <p className="text-center text-white text-xl">
            Not sure what to do? The Abroad Study Counselor will help you figure
            it out{" "}
          </p>
        </div>
        <button className="bg-[#FC5E08] rounded-lg px-3 m-3 text-semibold text-white text-xl">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Summary;
