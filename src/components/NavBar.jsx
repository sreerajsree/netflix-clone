import React from "react";
import NetflixLogo from "../logo/netflix.png";
import { TbWorld } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  // navigate to home page
  const navigate = useNavigate();

  //handle logout
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 md:p-10 z-[100] absolute w-full">
      <Link to="/">
        <img src={NetflixLogo} alt="Netflix-logo" className="h-8 md:h-12" />
      </Link>
      <div className="flex">
        <div className="relative md:inline-flex text-white hidden">
          <TbWorld className="absolute top-[13px] left-1 w-5 h-5" />
          <AiFillCaretDown className="w-4 h-4 absolute top-1 right-[-5px] m-4 pointer-events-none" />
          <select className="border border-white rounded-sm px-8 py-3 bg-transparent focus:outline-none appearance-none">
            <option className="bg-gray-700">English</option>
            <option className="bg-gray-700">Hindi</option>
          </select>
        </div>
        {user?.email ? (
          <div>
            <Link to="/account">
              <button className="text-white ml-4 border border-white rounded-sm px-3 md:px-6 py-1 md:py-2 text-sm md:text-base">
                Account
              </button>
            </Link>
            <button onClick={handleLogout} className="bg-red-600 text-white px-3 md:px-6 py-1 md:py-2 rounded ml-6 text-sm md:text-base">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button className="text-white ml-4 border border-white rounded-sm px-3 md:px-6 py-1 md:py-2 text-sm md:text-base">
                Sign Up
              </button>
            </Link>
            <Link to="login">
              <button className="bg-red-600 text-white px-3 md:px-6 py-1 md:py-2 rounded ml-6 text-sm md:text-base">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
