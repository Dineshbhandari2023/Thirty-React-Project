import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();

  const foreCastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="text-2xl font-bold ">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, indx) => (
          <AccordionItem key={indx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex bg-slate-200 border border-gray-400 rounded-2xl h-10 m-5 text-center cursor-pointer text-lg py-1 px-5">
                  <img
                    className="size-8"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="Weather"
                  />
                  <label className="text-black flex-1 font-semibold">
                    {foreCastDays[indx]}
                  </label>
                  <label className="flex-1 mr-4 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-gray-600 tracking-tighter">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex justify-between items-center">
                <label className="text-gray-600 text-sm ml-60">
                  {item.weather[0].description}
                </label>
                <label className="text-gray-600 text-sm mr-60">
                  Temp: {Math.round(item.main.temp)}°C
                </label>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-600 text-sm ml-60">
                  Humidity: {item.main.humidity}%
                </label>
                <label className="text-gray-600 text-sm mr-60">
                  Wind: {item.wind.speed} m/s
                </label>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-600 text-sm ml-60">
                  Sea Level: {item.main.sea_level}m
                </label>
                <label className="text-gray-600 text-sm mr-60">
                  cloud: {item.clouds.all}%
                </label>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
