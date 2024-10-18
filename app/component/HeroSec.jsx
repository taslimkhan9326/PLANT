"use client";
import { Rating } from '@mui/material';
import React, { useState } from 'react';

const plants = [
  { name: "Calathea Plant", description: "Trendy House Plant" },
  { name: "Snake Plant", description: "Trendy House Plant" },
  { name: "Fiddle Leaf Fig", description: "Trendy House Plant" },
];

const HeroSec = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % plants.length);
  };

  return (
    <>
      <div className="container mx-auto mt-8 px-4 md:mt-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div>
              <h1 className="text-[42px] sm:text-[64px] md:text-[80px] lg:text-[97px] text-[#FFFFFF] font-semibold leading-tight ml-[-3px] md:ml-[-6px]">
                Breath Natureal
              </h1>
              <p className="text-[18px] sm:text-[21px] text-[#FFFFFF] font-medium leading-[28px] max-w-full md:max-w-[700px] py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center space-x-6">
                <button className="text-[18px] sm:text-[20px] text-[#FFFFFF] font-medium border-[1px] border-[#FFFFFF] rounded-[6px] py-1 px-6 sm:px-8 mt-2 hover:bg-[#fff] hover:text-black duration-300">
                  Explore
                </button>
                <p className="text-[14px] sm:text-[15px] text-[#FFFFFF] font-medium flex items-center space-x-3">
                  <img src="/images/play.svg" alt="" className="w-[45px] sm:w-[55px]" />
                  <span>Live Demo...</span>
                </p>
              </div>
            </div>
            <div className="relative bg-box w-full sm:w-[320px] py-6 px-6 rounded-[25px] mt-10 md:mt-[200px] mb-4">
              <div className="flex items-center space-x-6 py-2 px-2">
                <div>
                  <img src="/images/person.svg" alt="" />
                </div>
                <div>
                  <h1 className="text-[#FFFFFF] text-[18px] sm:text-[21px] font-medium">Alena Patel</h1>
                  <Rating
                    className="max-w-24"
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
              <p className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            {/* Slider for Plant Info */}
            <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[380px] sm:h-[420px] md:h-[450px] bg-gray-500 backdrop-blur-lg border-[2px] border-white py-6 sm:py-8 px-6 sm:px-9 rounded-[32px] bg-image">
              <div className="absolute bottom-[70px] sm:bottom-[80px]">
                <div>
                  <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] font-medium">
                    {plants[currentSlide].description}
                  </p>
                  <h2 className="text-[#FFFFFF] text-[22px] sm:text-[26px] md:text-[30px] font-bold">
                    {plants[currentSlide].name}
                  </h2>
                </div>
                <div className="mt-4">
                  <button className="text-[18px] sm:text-[20px] text-[#FFFFFF] font-medium border-[1px] border-[#FFFFFF] rounded-[6px] py-1 px-6 sm:px-8 hover:bg-[#fff] hover:text-black duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {plants.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                    ></span>
                  ))}
                </div>
              </div>
              <button onClick={handleNext} className="absolute right-6 sm:right-7 bottom-[100px] sm:bottom-[130px]">
                <img src="/images/right-arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
