import React from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-80 w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2>Upcomming meeting at: 12:30 AM</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
