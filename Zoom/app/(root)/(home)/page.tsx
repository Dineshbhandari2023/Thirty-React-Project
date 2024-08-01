import MeetingList from "@/components/MeetingList";
import React from "react";

const Home = () => {
  const day = new Date();
  const date = day.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = day.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-80 w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="bg-gray-700 backdrop-blur-sm shadow-md max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcomming meeting at: 12:30 AM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingList />
    </section>
  );
};

export default Home;
