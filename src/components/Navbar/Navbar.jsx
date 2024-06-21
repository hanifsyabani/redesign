"use client";

import Image from "next/image";
import logo from "@/assets/logogdsc.png";
import { NavItem, option } from "./NavItem";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary flex justify-between items-center h-20 fixed w-full z-50 px-3">
      <div className="flex items-center justify-between w-full lg:hidden">
        <div onClick={toggleMenu} className="cursor-pointer">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className="pr-3">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
      </div>
      <div className="hidden lg:flex items-center w-full justify-between">
        <div className="pl-3">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-center">
          <select
            name="even"
            id="even"
            className="bg-secondary w-32 outline-none mr-2 hover:bg-primary cursor-pointer py-7 hover:text-white font-semibold "
          >
            <option hidden>About GDSC</option>
            {option.map((item) => (
              <option value="About" key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {NavItem.map((nav) => (
            <div
              key={nav.id}
              className={`px-2 py-6 w-36 cursor-pointer hover:text-white font-semibold text-center border-l-2 border-white ${
                nav.id === 1
                  ? "hover:bg-[#4286F5]"
                  : nav.id === 2
                  ? "hover:bg-[#109D58]"
                  : nav.id === 3
                  ? "hover:bg-[#FABD03]"
                  : null
              }`}
            >
              <h5>{nav.name}</h5>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-secondary flex flex-col items-center">
          <select
            name="even"
            id="even"
            className="bg-secondary w-32 outline-none mb-2 hover:bg-primary cursor-pointer py-2 hover:text-white font-semibold "
          >
            <option hidden>About GDSC</option>
            {option.map((item) => (
              <option value="About" key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {NavItem.map((nav) => (
            <div
              key={nav.id}
              className={`w-full text-center py-4 cursor-pointer hover:text-white font-semibold border-t border-white ${
                nav.id === 1
                  ? "hover:bg-[#4286F5]"
                  : nav.id === 2
                  ? "hover:bg-[#109D58]"
                  : nav.id === 3
                  ? "hover:bg-[#FABD03]"
                  : null
              }`}
            >
              <h5>{nav.name}</h5>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
