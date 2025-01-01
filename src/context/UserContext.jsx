import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/auth";

// Create the Context
const UserContext = createContext();

// Custom hook to access user data
export const useUser = () => {
  return useContext(UserContext);
};

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch user profile if already authenticated
  useEffect(() => {
    const checkUser = async () => {
      try {
        const profile = await api.getProfile();
        if (profile) {
          setUser(profile);
        }
      } catch (err) {
        console.log("No user logged in");
      }
    };
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
