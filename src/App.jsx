import React from "react";

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/home';
import About from './views/about';
import Layout from './layout/layout'
import Technologies from './views/technologies'
import Solutions from './views/solutions';
import Partners from './views/partners';
import Team from './views/team';
import Esg from './views/esg';
import Contact from './views/contact';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="partners" element={<Partners />} />
          <Route path="team" element={<Team />} />
          <Route path="esg" element={<Esg />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
