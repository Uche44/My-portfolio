import { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="w-full h-18 bg-white">
      <nav className="w-full flex justify-between px-2 ">
        <h1 className="text-black">mysite</h1>
        <button
          className="cursor-pointer justify-self-end md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
         

          <FaHamburger
            className={`text-black ${openNav ? "hidden" : "block"} `}
          />
        </button>
      </nav>
      <div
        className={`md:flex gap-4 md:opacity-1 h-[30px] ${
          openNav ? "mobile" : "not-mobile"
        } md:block`}
      >
        <button
          className="cursor-pointer justify-self-end md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <FaTimes className={`text-black ${openNav ? "block" : "hidden"} `} />
        </button>

        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;

// ☰
