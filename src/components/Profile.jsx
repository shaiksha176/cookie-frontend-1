import React, { useEffect, useState } from "react";
import api from "../api/auth";
import { useUser } from "../context/UserContext";

function Profile() {
  const { user } = useUser(); // Access user state from context
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.getProfile();
      setProfile(res);
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
