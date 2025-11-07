import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const NavItem = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
];

const Icons = [MdManageAccounts, IoIosSearch, FaRegHeart, BsCart4];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-[#FAE3B6] z-50 shadow-md">
      <div className="max-w-[1366px] mx-auto flex items-center justify-between py-4 px-2 md:px-0">
        {/* 🔹 Logo */}
        <img src={logo} alt="Logo" className="w-28 h-auto cursor-pointer" />

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="text-lg flex items-center gap-12">
            {NavItem.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
                      : "hover:text-orange-500 transition-colors duration-200"
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Desktop Icons */}
        <div className="hidden md:flex items-center gap-8 text-2xl">
          {Icons.map((Icon, i) => (
            <Icon
              key={i}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          {NavItem.map((nav, index) => (
            <li key={index}>
              <NavLink
                to={nav.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500 transition-colors duration-200"
                }
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Icons */}
        <div className="flex justify-center gap-8 pb-6 text-2xl">
          {Icons.map((Icon, i) => (
            <Icon
              key={i}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
