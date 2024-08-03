import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomecardProps {
  className: string;
  img: string;
  title: string;
  des: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  des,
  handleClick,
}: HomecardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] 2xl:max-w-[500px] min-h-[260px] rounded-2xl cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div
        className={cn(
          "flex-center bg-transparent backdrop-blur-sm shadow-lg max-w-[270px] rounded-lg py-2 text-center text-base font-normal size-12",
          className
        )}
      >
        <Image src={img} alt="Meeting Image" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p className="text-lg font-normal ">{des}</p>
      </div>
    </div>
  );
};

export default HomeCard;
