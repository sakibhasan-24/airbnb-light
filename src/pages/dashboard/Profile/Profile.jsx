import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Helmet } from "react-helmet-async";

import useRole from "../../../hooks/Api/useRole";

export default function Profile() {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [role] = useRole();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <figure>
        <img
          src={user?.photoURL || "https://placeimg.com/400/225/arch"}
          alt="Profile"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user?.displayName}
          <div className="badge badge-secondary uppercase">
            {role || "role"}
          </div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline px-4 py-6 hover:bg-lime-800 cursor-pointer">
            change Password
          </div>
          <div className="badge badge-outline px-4 py-6  hover:bg-lime-800 cursor-pointer">
            Update Profile
          </div>
        </div>
      </div>
    </div>
  );
}
