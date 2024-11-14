import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../../pages/homepage/Homepage';
import WritePage from '../../pages/writePage/WritePage';
import ViewPage from '../../pages/viewPage/ViewPage';
import Settings from '../../pages/settingsPage/SettingsPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import Signup from '../../pages/signupPage/SignupPage';
import "./main.css";

export default function Main() {
  return (
    <main id='main'>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/viewPost/:id" element={<ViewPage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </main>
  );
}
