import React from 'react';

const TrandingPlants = () => {
  return (
    <>
      <div className="container mt-16 px-4">
        <h1 className='text-[#FFFFFF] text-[28px] sm:text-[35px] text-center font-bold mb-16 sm:mb-24'>Our Trendy Plants</h1>
        
        {/* 1st */}
        <div className="rounded-[60px] sm:rounded-[110px] px-4 sm:px-6 glass">
          <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 sm:gap-0">
            <div className="col-span-6">
              <img src="/images/small-plant.svg" alt="" className='mt-[-60px] sm:mt-[-115px] mx-auto sm:ml-[-45px] mb-8 sm:mb-12 w-40 sm:w-auto' />
            </div>
            <div className='col-span-6 text-center sm:text-left'>
              <h2 className='text-[#FFFFFF] text-[24px] sm:text-[32px] font-semibold'>For Small Decs Ai Plant</h2>
              <p className='text-[#FFFFFF] text-[15px] sm:text-[17px] font-light py-2 leading-[20px] sm:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h2 className='text-[#FFFFFF] text-[24px] sm:text-[32px] font-semibold'>Rs. 599/-</h2>
              <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-3'>
                <button className='text-[18px] sm:text-[20px] text-[#FFFFFF] font-light border-[1px] border-[#FFFFFF] rounded-[6px] py-2 px-6 sm:py-1 sm:px-8 hover:bg-[#fff] hover:text-black duration-300'>Explore</button>
                <button className='text-[18px] sm:text-[20px] text-[#FFFFFF] font-medium border-[1px] border-[#FFFFFF] rounded-[6px] py-[7px] px-4'><img src="/images/bag.svg" alt="" className='w-[18px] sm:w-[22px]' /></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 2nd */}
        <div className="rounded-[60px] sm:rounded-[110px] px-4 sm:px-20 mt-16 sm:mt-28 glass-2">
          <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 sm:gap-0">
            <div className='col-span-6 text-center sm:text-left'>
              <h2 className='text-[#FFFFFF] text-[24px] sm:text-[32px] font-semibold'>For Fresh Decs Ai Plant</h2>
              <p className='text-[#FFFFFF] text-[15px] sm:text-[17px] font-light py-2 leading-[20px] sm:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h2 className='text-[#FFFFFF] text-[24px] sm:text-[32px] font-semibold'>Rs. 579/-</h2>
              <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-3'>
                <button className='text-[18px] sm:text-[20px] text-[#FFFFFF] font-light border-[1px] border-[#FFFFFF] rounded-[6px] py-2 px-6 sm:py-1 sm:px-8 hover:bg-[#fff] hover:text-black duration-300'>Explore</button>
                <button className='text-[18px] sm:text-[20px] text-[#FFFFFF] font-medium border-[1px] border-[#FFFFFF] rounded-[6px] py-[7px] px-4'><img src="/images/bag.svg" alt="" className='w-[18px] sm:w-[22px]' /></button>
              </div>
            </div>
            <div className="col-span-6">
              <img src="/images/small-plant-2.svg" alt="" className='mt-[-60px] sm:mt-[-90px] mx-auto sm:mr-[-45px] mb-8 sm:mb-12 w-40 sm:w-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrandingPlants;
