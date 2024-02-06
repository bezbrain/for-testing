import { useState } from "react";
import { Logo } from "../logo";
import { FaBarsStaggered, FaCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { ButtonLink } from "../buttons";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = `flex flex-col items-center fixed top-0 w-full bg-[#9f2936] min-h-full pt-[10vh] ${
    isNavOpen
      ? "right-0 transition-all duration-1000 ease-in-out"
      : "right-[-500px]"
  } iPhone:w-[300px] md:flex-row md:static md:bg-white md:pt-[0] md:w-fit md: space-x-8 lg:w-1/2 lg:justify-between`;

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="flex justify-between items-center max-w-[1440px] mx-auto p-4">
      <Logo />

      <FaBarsStaggered
        className="fixed right-4 top-4 text-2xl cursor-pointer md:hidden"
        onClick={handleNavOpen}
      />
      <ul className={navItems}>
        <IoClose
          className="absolute right-4 top-4 text-white text-4xl cursor-pointer md:hidden"
          onClick={handleNavClose}
        />
        <li>
          <a
            href="/"
            className="text-white text-2xl md:text-black md:text-xl md:hover:border-b-4 hover:border-[#9f2936]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/user-management"
            className="text-white text-2xl md:text-black md:text-xl md:hover:border-b-4 hover:border-[#9f2936]"
          >
            Manage users
          </a>
        </li>
        <li>
          <ButtonLink
            linkStyle="hover:scale-105"
            url="/manage-asset-list"
            content="Manage asset list"
          />
        </li>
        <li className="flex text-[#9f2936]">
          <button>
            <FaCircleUser className="text-4xl hover:scale-110" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
