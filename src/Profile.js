// Profile.js
import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Task from "./Task";

const Profile = () => {
  const navigate = useNavigate(); // Import and use the useNavigate hook

  const goToTask = () => {
    navigate("/home/profile/task"); // Use navigate to go to the Task screen
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>This is your profile page.</p>
      <button onClick={goToTask}>Go to Task</button> {/* Use a button to trigger navigation */}
      <Routes>
        <Route path="task" element={<Task />} />
        {/* Other child routes */}
      </Routes>
    </div>
  );
};

export default Profile;
