import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../../pages/homepage/Homepage';
import WritePage from '../../pages/writePage/WritePage';
import ViewPage from '../../pages/viewPage/ViewPage';
import Settings from '../../pages/settings/Settings';
import "./main.css";

export default function Main() {
  return (
    <main id='main'>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/viewPost/:id" element={<ViewPage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </main>
  );
}
