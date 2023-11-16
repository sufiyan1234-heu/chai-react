import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return (
    <div>
      <h1>Profile</h1>
      <div>Username: {user.username}</div>
      <div>Password: {user.password}</div>
    </div>
  );
}

export default Profile;
