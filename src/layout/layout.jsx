import { Outlet } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Nav from './nav';

import '../assets/css/mmenu.css';

const Layout = () => {

    return (
        <>
            <div className="min-h-[calc(100vh-100px)]">

                <Header />

                <Nav />

                <Outlet />

            </div>

            <Footer />
        </>
    )
};

export default Layout;
