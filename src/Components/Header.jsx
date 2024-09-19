import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import popcornLogo from "../assets/popcorn-imgs/popcornBucket.png";
import DesktopNav from "./DesktopNav";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  }, [window]);

  const openMenu = () => {
    setMobileOpen(true);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div className="header w-full max-w-[1280px] m-auto mt-0 mb-0 p-4 pt-6 md:p-8 flex items-center justify-between absolute top-0 left-0 right-0 z-[100]">
      <Link
        to="/"
        className="flex items-center hover:text-red-400 transition-all duration-200 ease-in-out"
      >
        <img src={popcornLogo} alt="Logo" className="w-[32px] mr-1" />
        <p className="logoTitle font-bold text-[1.5rem]">Movie Search</p>
      </Link>
      <DesktopNav />
      <div className={`mobileMenu flex md:hidden`}>
        <i class="bx bx-menu text-[2rem] cursor-pointer" onClick={openMenu}></i>
      </div>
      {mobileOpen ? (
        <div className="mobileMenuContainer flex flex-col items-center gap-10 md:hidden fixed top-0 right-0 bottom-0 h-full w-full max-w-[275px] p-8 z-[200] bg-slate-500 shadow-lg">
          <div className="w-full items-end text-right text-3xl">
            <i class="bx bxs-x-circle cursor-pointer" onClick={closeMenu}></i>
          </div>
          <ul className="navList flex flex-col list-none gap-8">
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
        </div>
      ) : null}
    </div>
  );
}

export default Header;
