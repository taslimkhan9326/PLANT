"use client";

import React, { useState } from 'react';

const TopSelling = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: '/images/p-1.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
    {
      id: 2,
      image: '/images/p-2.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
    {
      id: 3,
      image: '/images/p-3.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
    {
      id: 4,
      image: '/images/p-4.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
    {
      id: 5,
      image: '/images/p-5.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
    {
      id: 6,
      image: '/images/p-6.svg',
      name: "Calathea plant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      price: 359,
    },
  ]);

  return (
    <>
      <div className="container mt-24 px-4 mx-auto">
        <div className="relative flex items-center justify-center">
          <span>
            <img src="/images/left.svg" alt="" className="w-[30px] md:w-[40px] absolute bottom-[-8px] left-[10%] md:left-[485px]" />
          </span>
          <span className="text-white text-[24px] md:text-[35px] font-semibold text-center">Our Top Selling</span>
          <span>
            <img src="/images/right.svg" alt="" className="w-[30px] md:w-[40px] absolute top-[-1px] right-[10%] md:right-[485px]" />
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 mt-10 md:mt-20">
          {product.map((product, index) => (
            <li key={product.id} className="border-[1px] border-gray-600 rounded-[30px] md:rounded-[50px] max-w-full md:max-w-[375px] glass mx-auto">
              <div className="py-6 px-6 md:px-8">
                <img
                  src={product.image}
                  alt=""
                  className={`mx-auto mt-[-80px] ${index === 0 ? 'mt-[-95px]' : ''} ${index === 3 ? '!mt-[-70px]' : ''} ${index === 4 ? '!mt-[-90px]' : ''}`}
                />
                <h4 className={`text-[#FFFFFF] text-[20px] md:text-[27px] font-medium mt-4 ${index === 1 ? 'mt-7' : ''}`}>{product.name}</h4>
                <p className="text-[#FFFFFF] text-[15px] md:text-[18px] font-normal my-3 leading-[20px] md:leading-[23px]">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#FFFFFF] text-[22px] md:text-[28px] font-normal mt-2">Rs. {product.price}/-</span>
                  <button className="text-[16px] md:text-[20px] text-[#FFFFFF] font-medium border-[1px] border-[#FFFFFF] rounded-[6px] py-[5px] px-3 md:py-[7px] md:px-4 mt-3">
                    <img src="/images/bag.svg" alt="" className="w-[18px] md:w-[22px]" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopSelling;
