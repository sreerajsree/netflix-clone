import React from "react";
import NetflixLogo from "../logo/netflix.png";
import { TbWorld } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-10 z-[100] absolute w-full">
      <img src={NetflixLogo} alt="Netflix-logo" className="h-12" />
      <div>
        <div class="relative inline-flex text-white">
          <TbWorld className="absolute top-[13px] left-1 w-5 h-5" />
          <AiFillCaretDown className="w-4 h-4 absolute top-1 right-[-5px] m-4 pointer-events-none" />
          <select class="border border-white rounded-sm px-8 py-3 bg-transparent focus:outline-none appearance-none">
            <option className="bg-gray-700">English</option>
            <option className="bg-gray-700">Hindi</option>
          </select>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded ml-6">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
