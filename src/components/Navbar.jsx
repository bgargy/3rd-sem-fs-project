import React from "react";
import GradientBtn from "./GradientBtn";


import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "features", // Updated from "products" to "features"
    },
    {
      id: 3,
      link: "team", // Updated from "customers" to "team"
    },
    {
      id: 4,
      link: "login",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <h1 className="text-thBlue tracking-widest text-3xl">CAMPUS SPACE</h1>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    {link === "features" ? "Features" : link === "team" ? "Team" : link}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="https://www.bmsce.ac.in" target="_blank" rel="noopener noreferrer">
          <GradientBtn className="ml-4 capitalize" title="BMSCE" />
        </a>          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {link === "features" ? "Features" : link === "team" ? "Team" : link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
