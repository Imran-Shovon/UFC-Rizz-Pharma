import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import UfcLogo from "../assets/UFC_Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="text-white font-sans w-full z-50"
      // style={{
      //   background: "linear-gradient(90deg, #1a1a2e, #4b0082)",
      // }}
    >
      <div className="flex justify-between items-center px-6 md:px-24 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={UfcLogo} alt="UFC Logo" className="w-20 md:w-24 h-auto" />
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex gap-6 items-center text-lg font-medium">
            <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white">
              Home
            </li>
            <li className="hover:text-yellow-400 flex items-center cursor-pointer">
              Category <RiArrowDropDownLine size={30} />
            </li>
            <li className="hover:text-yellow-400 flex items-center cursor-pointer">
              Top Products <RiArrowDropDownLine size={30} />
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
            <li className="hover:text-yellow-400">
              <FaInstagram size={20} />
            </li>
            <li className="hover:text-yellow-400">
              <FaFacebookF size={20} />
            </li>
          </ul>

          {/* Desktop Right Menu */}
          <ul className="hidden mt-4 md:flex gap-4 justify-end items-center text-sm font-medium">
            <li>
              <button className="bg-[#e1c06e] text-black px-5 py-2 rounded-3xl hover:bg-yellow-300">
                Sign Up
              </button>
            </li>
            <li>
              <button className="border border-white px-5 py-2 rounded-3xl hover:bg-white hover:text-black">
                Log In
              </button>
            </li>
            <li>
              <IoCartOutline size={30} className="hover:text-yellow-400" />
            </li>
          </ul>
        </div>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col  bg-[#2a2a4e] gap-4 py-6 px-10 justify-end text-base font-medium">
          <ul className="flex flex-col gap-4 justify-end">
            <li className="text-white">Home</li>
            <li className="text-white flex  gap-1">
              Category <RiArrowDropDownLine size={24} />
            </li>
            <li className="text-white flex  gap-1">
              Top Products <RiArrowDropDownLine size={24} />
            </li>
            <li className="text-white">Contact Us</li>
            <li className="text-white">FAQs</li>
            <li className="text-white flex gap-3">
              <FaInstagram size={40} />
            </li>
             <li> <FaFacebookF size={40} /> </li>
            <li>
              <button className="bg-[#e1c06e] text-black px-5 py-2 rounded-3xl text-sm hover:bg-yellow-300">
              Sign Up
            </button>
            </li>
            <li>
              <button className="border border-white px-5 py-2 rounded-3xl text-sm text-white hover:bg-white hover:text-black">
              Log In
            </button>
            </li>
            <li>
              <IoCartOutline size={50} className="text-white" />
            </li>
          </ul>
          {/* <div className="flex gap-4 mt-4">
            
            
            
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
