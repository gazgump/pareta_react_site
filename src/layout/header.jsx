import React, { useState } from "react";
import OffCanvasMenu from "../components/offcanvas";
import Nav from './mob-nav';

export default function Header() {

  const [showOffCanvas, setShowOffCanvas] = useState(false);

    const toggleOffCanvas = () => {
        setShowOffCanvas(!showOffCanvas);
    };

  return (
    <>
      <div className="relative bg-blue-900 p-8 flex justify-center items-center">
        <a href="/"><img src="https://res.cloudinary.com/pareta/image/upload/v1753815261/pareta-logo_riqju4.png" alt="logo" className="w-[220px] lg:w-[250px]" /></a>
      </div>

      <a onClick={(toggleOffCanvas)} className="absolute z-100 top-4 right-4 pointer-events-auto lg:hidden">
          <button className="w-8 h-8 cursor-pointer" >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 17H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          </button>
      </a>

      {showOffCanvas && (
          <OffCanvasMenu
          title="Menu"
          width="w-[80%]"
          postition="left-0" /* Use 'left-0' to position the offcanvas menu to the left. */
          component={<Nav toggle={toggleOffCanvas} />}
          onRequestClose={toggleOffCanvas}
          className="transition delay-150 duration-300 ease-in-out"
          />
      )}
    </>
   
  );
}
