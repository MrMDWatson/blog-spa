import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../../pages/homepage/Homepage';
import WritePage from '../../pages/writePage/WritePage';
import ViewPage from '../../pages/viewPage/ViewPage';
import AboutPage from '../../pages/aboutPage/AboutPage';
import ContactPage from '../../pages/contactPage/ContactPage';
import "./main.css";

export default function Main() {
  return (
    <main id='main'>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/viewPost/:id" element={<ViewPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </main>
  );
}
