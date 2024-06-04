//About.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Routes>
        <Route path=":action/profile/*" element={<Profile />} />
        {/* Other child routes */}
      </Routes>
    </div>
  );  
};
export default About;
