import React from "react";
import dubai from "../../../public/images/abroadstudy.png";
import women from "../../../public/images/women.png";

const features = [
  {
    title: "Ample Experience",
    description:
      "We have over 10 years of proven expertise and experience in abroad education counseling.",
  },
  {
    title: "Personal Attention",
    description:
      "We work closely with the students, guiding them through the process with a personal touch.",
  },
  {
    title: "Expert Counsellors",
    description:
      "We have a highly dedicated team of experts and professional counselors to guide the students.",
  },
  {
    title: "One-stop Solution",
    description:
      "We provide a complete solution for abroad studies with integrated career counseling programs.",
  },
];

const AbroadStudy = () => {
  return (
    <div className="mt-20">
      <img src={dubai} alt="Dubai Image" className="mb-8" />
      <h1 className="ml-14 text-6xl text-[#FC5E08] mb-3 font-bold font-serif">
        <span className="text-3xl text-[#015598] font-semibold"> Study in</span>{" "}
        <br /> Dubai
      </h1>
      <p></p>
      <p className="px-16 tracking-wider py-5">
        The UAE has an excellent educational system that welcomes students from
        all over the world. Students studying in UAE gain a global-level
        education and simultaneously enjoy the multi-cultural environment. There
        are several universities in Dubai with world-class rankings. In
        addition, UAE is home to some of the best artificial wonders of the
        world, including but not limited to Burj Khalifa and the palm islands.{" "}
      </p>
      <p className="px-16 tracking-wider py-5">
        More than 80 percent of the workforce is foreign, making it highly
        diverse. Furthermore, the city’s cosmo politan culture allows you to
        interact with nationals from every corner of the world. In addition, the
        UAE is a crime-free country. Hence, studying in Dubai is the best way to
        gain international experience in a safe environment. Additionally, the
        schools and universities in Dubai follow the standards of the United
        States, Britain, Germany, Canada, and Australia. All courses are taught
        in English. Hence, students can efficiently study in the country.
      </p>
      <p className="px-16 tracking-wider py-5">
        The UAE’s growing economy and tolerant people make it a perfect place
        for students to pursue a degree. Furthermore, the cost of a degree is
        less than in other countries, which means it is more affordable to study
        in Dubai. In addition, there are many internship opportunities in the
        UAE for those with a strong work ethic.
      </p>
      <p className="px-16 tracking-wider py-5 mb-5">
        Due to the city’s cosmopolitan lifestyle, it is the preferred
        destination for studying and working. As a result, thousands of people
        migrate to the UAE for jobs and education. In addition, the UAE is a
        safe, hospitable, and friendly place to live. Therefore, studying in
        Dubai will be a good investment for studying abroad. Enquiry Now
      </p>
      <div className="bg-blue-800 py-10">
        <h2 className="text-center text-white text-3xl font-bold mb-8">
          Why Choose Aspire Global?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={women} alt="" />
      </div>
    </div>
  );
};

export default AbroadStudy;
