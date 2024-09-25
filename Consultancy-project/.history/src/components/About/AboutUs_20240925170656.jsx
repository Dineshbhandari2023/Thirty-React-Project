import React from "react";
import review from "../../../public/images/review.jpg";
const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl uppercase">
              one stop solution for all your Abroad study needs
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Global Aspire Education Consultancy is an institute for didactic
              opportunities and career advance where people are connected
              internationally with learning opportunities and imaginative
              thoughts from different countries across the globe.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              {" "}
              We offer free IELTS & visa preparation classes for those students
              initiating their visa process through us and also to other
              students at an affordable cost. We have a very successful history
              in our services. We have developed particular policy and system to
              counsel students for their higher study aspirations in foreign
              universities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
            <img
              alt="..."
              src={review}
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-500 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-gray-600">
                Think about it For Dubai Visa
              </h4>
              <p className="text-gray-600">
                Nepal's best education Consultancy
              </p>
            </blockquote>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Our Strengths</h6>
                  <p className="mb-4 text-blueGray-500">
                    A team of informed and committed senior education
                    advisors/counselors who understand the need of the students
                    and their parents or sponsors. We firmly believe in customer
                    service to the students . Our strongly student centered
                    approach to counseling means, we give students the fullest
                    possible information on the all available options to help
                    them make sensible decisions.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-drafting-compass"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Our Philosophy</h6>
                  <p className="mb-4 text-blueGray-500">
                    At Global Aspire Education Consultancy, we firmly believe
                    that further education requires proper planning to ensure
                    that, students choose the appropriate academic pathway. With
                    this in mind, we assist students by giving comprehensive
                    information about study opportunities in Dubai for now. We
                    continuously believe in providing professional services to
                    students, parents and our institutional clients at all
                    times.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                  <p className="mb-4 text-blueGray-500">
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working instantly.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                  <p className="mb-4 text-blueGray-500">
                    Built by developers for developers. You will love how easy
                    is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
