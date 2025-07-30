import React from "react";

import {
  Link
} from "react-router";

export default function Footer() {

  return (
    <footer className="bg-gray-200 w-full h-[100px] flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      <ul className="flex flex-row px-8 mb-4">
        <li><Link className="text-black text-xs md:text-sm mr-4 pr-4 border-r-1 border-gray-400" to='/contact' ><span>Contact Us</span></Link></li>
        <li><Link className="text-black text-xs md:text-sm mr-4 pr-4 border-r-1 border-gray-400" to='/technologies' ><span>Our Technologies</span></Link></li>
        <li><Link className="text-black text-xs md:text-sm mr-4 pr-4 lg:border-r-1 border-gray-400" to='/partners' ><span>Partner with us</span></Link></li>
        <li className="hidden lg:inline"><span className="text-black text-xs md:text-sm mr-4">&copy; Pareta Innovations 2025</span></li>
      </ul>
      <span className="flex lg:hidden text-black text-xs md:text-sm mr-4">&copy; Pareta Innovations 2025</span>
    </footer>
  );
}
