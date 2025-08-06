import React, { useState } from "react";
import { Link } from "react-router-dom";
 
    export default function Header(toggle) {
 
    return (

        <div className="flex flex-row items-center justify-center p-0" >

                <nav id="nav-menu" className='w-full' >
                    <ul className="flex flex-col lg:flex-row">
                    <li className="p-4 border border-b-gray-200"><Link className="text-black w-full text-xl text-center" to='/' onClick={toggle}><span className="text-center right-2">Home</span></Link></li>
                    <li className="p-4 border border-b-gray-200"><Link className="text-black w-full text-xl mr-4" to='/about' onClick={toggle}><span className="text-center right-2">About us</span></Link></li>
                    <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/technologies' onClick={toggle}><span className="text-center right-2">Technology</span></Link></li>
                    <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/solutions' onClick={toggle}><span className="text-center right-2">Solutions and Use Cases</span></Link></li>
                    {/* <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/partners' onClick={toggle}><span className="text-center right-2">Partners</span></Link></li> */}
                    <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/team' onClick={toggle}><span className="text-center right-2">Our Team</span></Link></li>
                    <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/esg' onClick={toggle}><span className="text-center right-2">Innovation &amp; ESG</span></Link></li>
                    <li className="p-4 border border-b-gray-200"><Link className="text-black text-xl mr-4" to='/contact' onClick={toggle}><span className="text-center right-2">Contact Us</span></Link></li>
                    </ul>
                </nav>

        
        </div>
    );
}
