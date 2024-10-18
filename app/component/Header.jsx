"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <nav>
        <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img src="/images/plant-1.svg" alt="Planto Logo" className="h-[30px] w-[30px]" />
              <h5 className="text-[22px] md:text-[28px] text-[#FFFFFF] font-bold">Planto</h5>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <ul className="flex flex-wrap items-center space-x-6 md:space-x-10 lg:space-x-14">
                <li className="text-[16px] md:text-[18px] text-[#FFFFFF] font-medium">
                  <a href="/">Home</a>
                </li>
                <li className="relative group text-[16px] md:text-[18px] text-[#FFFFFF] font-medium">
                  <a href="/" className="flex items-center space-x-2 cursor-pointer">
                    <span>Plants Type</span>
                    <FontAwesomeIcon icon={faChevronDown} className="w-[14px] md:w-[18px] text-[#FFFFFF]" />
                  </a>
                  {/* Dropdown menu */}
                  <ul className="absolute left-0 mt-2 hidden group-hover:block bg-black text-[#FFFFFF] border border-[#fff] rounded shadow-lg py-2 w-[150px] md:w-[180px]">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                      <a href="/">Indoor Plants</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                      <a href="/">Outdoor Plants</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                      <a href="/">Succulents</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                      <a href="/">Flowering Plants</a>
                    </li>
                  </ul>
                </li>
                <li className="text-[16px] md:text-[18px] text-[#FFFFFF] font-medium">
                  <a href="/">More</a>
                </li>
                <li className="text-[16px] md:text-[18px] text-[#FFFFFF] font-medium">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>

            {/* Button Section */}
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10 mt-4 md:mt-0">
              <Button onClick={handleOpen} className="flex justify-end">
                <img src="/images/search.svg" alt="Search" className="h-[21px] w-[21px]" />
              </Button>
              <img src="/images/bag.svg" alt="Shopping Bag" className="h-[21px] w-[21px]" />
              <img src="/images/dash.svg" alt="Dashboard" className="h-[21px] w-[21px]" />
            </div>

            {/* Backdrop */}
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
