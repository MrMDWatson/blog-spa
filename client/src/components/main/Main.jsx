import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from '../../pages/homepage/Homepage';
import ViewPage from '../../pages/viewPage/ViewPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import Signup from '../../pages/signupPage/SignupPage';
import ProtectedPages from '../../pages/protectedPages/ProtectedPages';
import WritePage from '../../pages/protectedPages/writePage/WritePage';
import Settings from '../../pages/protectedPages/settingsPage/SettingsPage';
import "./main.css";

export default function Main() {
  const { user } = useSelector((store) => store.app);
  return (
    <main id='main'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/viewPost/:id" element={<ViewPage />} />
        <Route path="/login" element={!user ? (<LoginPage />) : (<Navigate to="/" />)}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/hub" element={<ProtectedPages />}>
          <Route path="/hub/write" element={<WritePage />} />
          <Route path="/hub/settings" element={<Settings />} />
        </Route>
      </Routes>
    </main>
  );
}
