// // ☰

import { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Links = ["Home", "About", "Projects", "Contact"];

  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="w-full h-18 md:h-20 bg-white ">
      <nav className="w-full h-full flex justify-between items-center px-3 bg-black">
        <div className="h-8 w-8 text-white font-bold md:text-[1.6rem]">PA</div>
        <button
          className={`text-white cursor-pointer bg-[#23312e] rounded-[10px] border-gray-200 h-10 w-10 justify-self-end md:hidden ${
            openNav ? "hidden" : "block"
          } `}
          onClick={() => setOpenNav(!openNav)}
        >
          ☰
        </button>
        {/* nav for large screen */}
        <div className="large md:flex md:items-center hidden gap-4 text-white text-[1.3rem] h-[50px] w-[30%] md:justify-between">
          {Links.map((link, index) => (
            <NavLink
              to={`${link.toLowerCase()}`}
              key={index}
              className="hover:underline"
            >
              {link}
            </NavLink>
          ))}
        </div>
      </nav>
      <div
        className={`md:hidden pt-10 overlay relative gap-4 text-white md:opacity-1 h-[30px] ${
          openNav ? "mobile" : "not-mobile"
        }`}
      >
        <button
          className="cursor-pointer justify-self-end md:hidden absolute right-8 top-4"
          onClick={() => setOpenNav(!openNav)}
        >
          <FaTimes className={` ${openNav ? "block" : "hidden"} `} />
        </button>

        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={`${link.toLowerCase()}`}
            onClick={() => setOpenNav(!openNav)}
            className="hover:cursor-pointer"
            smooth={true}
            duration={500}
          >
            {link}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
