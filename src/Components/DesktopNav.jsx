import React from "react";
import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <nav className="pl-4 pr-4 items-center desktopNav hidden md:flex">
      <ul className="flex items-center gap-8 h-full list-none">
        <li className="mr-4 flex font-semibold hover:text-red-400 hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out">
          <Link to="/home">Home</Link>
        </li>
        <li className="mr-4 flex font-semibold hover:text-red-400 hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out">
          <Link to="/search">Find your movie</Link>
        </li>
        <li className=" flex">
          <button className="p-3 rounded-3xl bg-red-600 font-bold text-white w-[140px] cursor-pointer hover:bg-red-400 transition-all duration-150 ease-in-out">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
