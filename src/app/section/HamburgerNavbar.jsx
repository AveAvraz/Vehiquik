"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#vehicles", label: "Vehicles" },
    { href: "/studio", label: "Studio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className={`text-white hover:text-primary focus:outline-none transition-transform duration-500 ${
          isOpen ? "rotate-90" : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu - Full-Screen Slide-in */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-90 text-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-primary transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col justify-center items-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="text-xl hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HamburgerNavbar;
