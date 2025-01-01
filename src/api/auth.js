import axios from "axios";

const API_BASE_URL = "http://23.21.66.149:5000/api/";

const api = {
  register: async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}auth/register`,
        userData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      return response.data; // Simplified response
    } catch (error) {
      console.log(error);
      // Handle error and return readable message
      throw new Error(error.response?.data?.error || "Registration failed");
    }
  },
  login: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, userData, {
        withCredentials: true,
      });

      console.log(response.data);

      return response.data; // Simplified response
    } catch (error) {
      console.log(error);
      // Handle error and return readable message
      throw new Error(error.response?.data?.error || "Login failed");
    }
  },

  logout: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}auth/logout`, {
        withCredentials: true,
      });

      console.log(response.data);

      return response.data; // Simplified response
    } catch (error) {
      console.log(error);
      // Handle error and return readable message
      throw new Error(error.response?.data?.error || "Logout failed");
    }
  },

  getProfile: async () => {
    const res = await fetch("http://localhost:5000/api/auth/profile", {
      credentials: "include",
    });
    return await res.json();
  },
};

export default api;
