import React from "react";

export default function Header() {

  return (

    <div className="relative bg-gray-800 p-8 flex justify-center items-center">
      <a href="/"><img src="https://res.cloudinary.com/pareta/image/upload/v1753815261/pareta-logo_riqju4.png" alt="logo" className="w-[220px] lg:w-[250px]" /></a>
      
      <a href="#nav-menu" className="absolute top-4 right-4 lg:hidden">
          <button className="w-8 h-8 cursor-pointer" aria-label="menu" aria-expanded="false" data-target="navbarMobile">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 17H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          </button>
      </a>
    </div>
   
  );
}
