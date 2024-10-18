import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mt-20 pt-16 pb-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-0">
            
            {/* Logo and Description */}
            <div className="col-span-5">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <img src="/images/plant-1.svg" alt="" className="w-[50px] sm:w-[60px]" />
                <h2 className="text-[#FFFFFF] text-[24px] sm:text-[28px] font-bold">Planto.</h2>
              </div>
              <p className="text-[#FFFFFF] text-[17px] sm:text-[19px] leading-[22px] sm:leading-[23px] font-normal max-w-[400px] my-6 sm:my-8 text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex justify-center sm:justify-start items-center space-x-6 sm:space-x-10 mt-8">
                <li className="text-[#FFFFFF] text-[20px] sm:text-[25px] font-bold">FB</li>
                <li className="text-[#FFFFFF] text-[20px] sm:text-[25px] font-bold">TW</li>
                <li className="text-[#FFFFFF] text-[20px] sm:text-[25px] font-bold">LI</li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-3">
              <ul className="space-y-2 sm:space-y-4 text-center sm:text-left">
                <h5 className="text-[#FFFFFF] text-[22px] sm:text-[24px] font-bold">Quick Link’s</h5>
                <li>
                  <a href="#" className="text-[#FFFFFF] text-[16px] sm:text-[18px] font-normal">Home</a>
                </li>
                <li>
                  <a href="#" className="text-[#FFFFFF] text-[16px] sm:text-[18px] font-normal">Type’s Of plant’s</a>
                </li>
                <li>
                  <a href="#" className="text-[#FFFFFF] text-[16px] sm:text-[18px] font-normal">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-[#FFFFFF] text-[16px] sm:text-[18px] font-normal">Privacy</a>
                </li>
              </ul>
            </div>
            
            {/* Subscription Section */}
            <div className="col-span-4">
              <h5 className="text-[#FFFFFF] text-[22px] sm:text-[24px] font-bold text-center sm:text-left">For Every Update.</h5>
              <div className="mt-8 flex relative">
            <input 
            type="text"
            placeholder='Enter Email'
            className='w-full py-4 px-6 border-[2px] border-white rounded-[10px] bg-transparent font-medium text-[18px] text-[#FFFFFF]'
             />
             <button className='bg-[#FFFFFF] text-[#000] font-medium text-[18px] rounded-[6px] absolute right-[5px] top-[4px] px-6 py-3 hover:bg-transparent border-[2px] border-white duration-300'>Subscribe</button>
          </div>
              <p className="text-[#FFFFFF] text-[17px] sm:text-[19px] font-medium mt-10 sm:mt-[90px] text-center sm:text-left">planto © all right reserve</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
