import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoSunnySharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(false);

  const element = document.documentElement;

  const handleIconMove = () => {
    setIcon(!icon);
  };
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    {
      text: "light",
      icon: <IoSunnySharp />,
    },
    {
      text: "dark",
      icon: <HiMoon />,
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <nav className="flex justify-between items-center p-6 pl-2 pr-2 md:pl-28 md:pr-28 bg-[#FFF3DA] dark:bg-[#0F0F0F]">
      <div className="md:hidden relative flex justify-between items-center w-full dark:text-[#DDE6ED]">
        <h1 className="capitalize text-5xl font-semibold font-dancing dark:text-[#DDE6ED]">
          <NavLink to={"/"} className={"dark:text-[#DDE6ED] "}>
            Pak Bazaar
          </NavLink>
        </h1>
        <button
          onClick={handleMenu}
          className="md:hidden flex text-3xl cursor-pointer"
        >
          {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
        {isOpen && (
          <div className="dark:bg-[#181818] fixed right-0 top-0 p-3 z-50 overflow-hidden h-screen w-full bg-[#ffffff] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
            <button
              onClick={handleMenu}
              className="md:hidden flex text-3xl cursor-pointer absolute right-5"
            >
              {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
            <ul className="dark:text-[#DDE6ED] flex flex-col justify-center items-center gap-14 font-poppins text-md font-medium p-3 h-screen text-gray-800 ">
              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <NavLink to={"login"}>Login</NavLink>
              </li>

              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <NavLink to={"register"}>Register</NavLink>
              </li>

              <li
                onClick={handleMenu}
                className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full"
              >
                <NavLink to={"my-orders"}>My Orders</NavLink>
              </li>

              <li className="hover:text-black hover:bg-[#EEF5FF] text-2xl font-poppins font-bold text-center border-gray-800 border-2 p-2 rounded-sm w-full">
                <NavLink
                  to={"about"}
                  className="flex justify-center items-center gap-1 relative "
                >
                  Cart <FaShoppingCart className="text-2xl" />{" "}
                  <span className="absolute w-[18px] h-[18px] bg-red-500 right-28 rounded-full -top-1 flex justify-center items-center text-sm text-white font-extralight">
                    2
                  </span>
                </NavLink>
              </li>
              <div className="border-2 border-black flex justify-between items-center gap-10 rounded-full w-ful px-1 py-1 relative  ">
                <span className="absolute w-[3px] h-[50px] right-[60px] rounded-full  bg-[#435255]" />
                {options.map((option, index) => (
                  <li
                    onClick={() => setTheme(option.text)}
                    key={index}
                    className={`duration-150 bg-transparent ${
                      theme === option.text
                        ? " dark:text-[#2F58CD] text-yellow-600 "
                        : "text-black dark:text-white"
                    }`}
                  >
                    <button className="text-4xl ">{option.icon}</button>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-between items-baseline gap-5">
        <h1 className="capitalize text-5xl font-semibold font-dancing dark:text-[#DDE6ED]">
          <NavLink to={"/"}>Pak Bazaar</NavLink>
        </h1>
      </div>

      <ul className="hidden md:flex justify-between items-center gap-6">
        <ul className="flex justify-between items-center gap-6 font-poppins text-md font-medium text-gray-400">
          <li className="hover:text-black">
            <NavLink to="login">Login</NavLink>
          </li>
          <li className="hover:text-black ">
            <NavLink to={"register"}>Register</NavLink>
          </li>
          <li className="hover:text-black ">
            <NavLink to={"my-orders"}>My Orders</NavLink>
          </li>
          <li className="hover:text-black ">
            <NavLink
              to={"about"}
              className="flex justify-between items-center gap-2 relative"
            >
              Cart <FaShoppingCart className="text-2xl" />{" "}
              <span className="absolute w-[18px] h-[18px] bg-red-500 -right-2 rounded-full -top-1 flex justify-center items-center text-sm text-white font-extralight">
                2
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="border-2 border-black flex justify-between items-start gap-4 rounded-full w-ful px-1 py-[1px] relative">
          {options.map((option, index) => (
            <li
              onClick={() => setTheme(option.text)}
              key={index}
              className={`duration-150 bg-transparent ${
                theme === option.text
                  ? " dark:text-[#2F58CD] text-yellow-600 "
                  : "text-black dark:text-white"
              }`}
            >
              <button className="text-2xl ">{option.icon}</button>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
