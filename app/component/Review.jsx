"use client";
import { Rating } from '@mui/material';
import React, { useState } from 'react';

const Review = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: '/images/person.svg',
      name: 'Maxn Raval',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 2,
      image: '/images/person.svg',
      name: 'Venely K',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 3,
      image: '/images/person.svg',
      name: 'Lii Thakur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ]);

  return (
    <>
      <div className="container mx-auto mt-24 px-4">
        <div className="relative flex items-center justify-center">
          <span>
            <img src="/images/left.svg" alt="" className="w-[30px] md:w-[40px] absolute bottom-[-8px] left-[10%] md:left-[470px]" />
          </span>
          <span className="text-white text-[24px] md:text-[35px] font-semibold text-center">Customer Review</span>
          <span>
            <img src="/images/right.svg" alt="" className="w-[30px] md:w-[40px] absolute top-[-1px] right-[10%] md:right-[470px]" />
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-20">
          {data.map((review) => (
            <li key={review.id} className="rounded-[20px] md:rounded-[50px] p-6 md:p-8 glass-3">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-5">
                <div className="flex-shrink-0">
                  <img src={review.image} alt="" className="h-[50px] w-[50px] md:h-auto md:w-auto" />
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] text-[18px] md:text-[23px] font-medium">{review.name}</h4>
                  <Rating
                    className="max-w-24 mt-2"
                    name="simple-controlled"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
              <p className="text-[#FFFFFF] text-[15px] md:text-[17px] font-normal leading-[22px] md:leading-[23px] mt-6 md:mt-9 mb-2">{review.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Review;
