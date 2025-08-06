import React, { useState } from "react";
import { Link } from "react-router-dom";
 
    export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
 
    return (

        <div className="flex flex-row items-center justify-center p-0 lg:p-4" >

            <div id="navbarMobile">
                <div className="navbar-start">
                <nav id="nav-menu" className='hidden lg:flex' >
                    <ul className="flex flex-col lg:flex-row">
                    <li className="after:!ml-0"><Link className="text-black text-xl text-center mr-4" to='/' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Home</span></Link></li>
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/about' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">About us</span></Link></li>
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/technologies' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Technology</span></Link></li>
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/solutions' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Solutions and Use Cases</span></Link></li>
                    {/* <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/partners' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Partners</span></Link></li> */}
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/team' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Our Team</span></Link></li>
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/esg' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Innovation &amp; ESG</span></Link></li>
                    <li className="after:!ml-0"><Link className="text-black text-xl mr-4" to='/contact' onClick={() => setShowMenu(!showMenu)}><span className="text-center right-2">Contact Us</span></Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        
        </div>
    );
}
