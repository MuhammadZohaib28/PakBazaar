import React from "react";
import { infoBoxData } from "../utils/data";

const InfoBox = () => {
  return (
    <div className="flex justify-between w-full flex-wrap gap-10 p-20 pl-2 pr-2 md:pl-28 md:pr-28 bg-[#FFD1DA] dark:bg-[#210719]">
      {infoBoxData.map((box, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-6 w-1/4 border border-red-300 rounded-md p-4 dark:bg-[#303A52]  bg-[#FFF7F1]"
        >
          <h1 className="flex justify-start items-start text-4xl text-[#E78895] font-poppins">
            {box.icon}
          </h1>
          <div className="flex flex-col justify-start gap-1 items-start font-poppins">
            <h1 className="text-2xl font-bold text-center dark:text-white">{box.title}</h1>
            <p className="text-start dark:text-white">{box.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
