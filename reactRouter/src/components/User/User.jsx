import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-600 p-4 font-bold text-6xl text-center text-white">
      User : {id}
    </div>
  );
};

export default User;
