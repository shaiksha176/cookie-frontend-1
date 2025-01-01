import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import api from "../api/auth";

function Navbar() {
  const { user, setUser } = useUser(); // Access user state from context
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await api.logout(); // Call the logout API
      console.log(res.message || "Logged out successfully"); // Optionally log the response
      setUser(null); // Clear user state
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout error:", error.message); // Handle errors during logout
    }
  };

  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {user && <Link to="/profile">Profile</Link>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
