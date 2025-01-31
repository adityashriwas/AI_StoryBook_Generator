"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route
  const { user, isSignedIn } = useUser();
  const toggleOpen = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const MenuList = [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Create Story",
          path: "/create-story",
        },
        {
          name: "Explore Stories",
          path: "/explore",
        },
        {
          name: "My Stories",
          path: "/dashboard",
        }
      ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 w-full p-2 bg-[#0f031b] backdrop-blur-md shadow-md flex justify-between items-center z-50">
        <div className="text-xl flex items-center">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <h2 className="font-bold text-2xl text-primary ml-3">TaleCrafter</h2>
        </div>

        <div className="flex items-center space-x-4">
         <UserButton />
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleOpen}
          className="flex flex-col space-y-1 p-2 rounded focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <div className={`w-6 h-0.5 bg-[#6266f0] transition ${isOpen ? "-rotate-45 translate-x-[-6px] translate-y-[6px] " : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#6266f0] transition ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#6266f0] transition ${isOpen ? "rotate-45 translate-x-[-6px] translate-y-[-6px]" : ""}`}></div>
        </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-[#17031b64] backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 pt-[100px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {
          MenuList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`block font-bold px-5 py-2.5 text-[20px] no-underline transition-colors duration-300 hover:bg-[#8e8f916a] ${
                pathname === item.path ? "bg-[#1D1D2F] text-white" : "text-primary"
              }`}
              onClick={closeNavbar}
            >
              {item.name}
            </Link>
          ))
        }

        
      </div>
    </>
  );
}

export default Header;
