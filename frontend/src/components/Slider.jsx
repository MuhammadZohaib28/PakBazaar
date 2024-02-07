import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { sliderData } from "../utils/data";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoPlay = true;
  let slideInterval;
  const intervalTime = 3000;

  const navigate = useNavigate();
  const prevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setCurrSlide(0);
  }, []);

  useEffect(() => {
    if (autoPlay) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currSlide, intervalTime, autoPlay]);
  return (
    <div className="w-full h-[calc(100vh-6rem)] relative overflow-hidden bg-[#FFF7F1]">
      <FaArrowCircleRight
        onClick={prevSlide}
        className=" bg-transparent text-[#FF6868] w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-1/2 translate-y-1/2 rotate-180 z-20 left-[1.5rem]"
      />
      <FaArrowCircleLeft
        onClick={nextSlide}
        className=" bg-transparent text-[#FF6868] w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-1/2 rotate-180 translate-y-1/2 z-20 right-[1.5rem]"
      />

      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={
            index === currSlide
              ? "absolute top-0 left-0 w-full h-full opacity-0 -translate-x-1/2 duration-500 ease-in transform current"
              : "absolute top-0 left-0 w-full h-full opacity-0 -translate-x-1/2 duration-500 ease-in transform "
          }
        >
          {index === currSlide && (
            <>
              <img src={slide.image} alt="slide" />
              <div className="absolute text-center top-[23rem] left-1/2 opacity-100 w-1/2 p-[3rem] flex justify-self-center items-center flex-col -translate-x-1/2 bg-[#e1f0da67]  box-border overflow-hidden shadow-xl shadow-black">
                <h1 className="z-50 text-5xl font-poppins font-semibold text-black">
                  {slide.heading}
                </h1>
                <p className="font-poppins text-2xl">{slide.desc}</p>
                <hr />
                <button
                  className="bg-[#99BC85] w-1/4 p-2 font-semibold rounded-sm text-3xl"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
