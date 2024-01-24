import React, { useContext, useState } from "react";
import { FaBuffer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getRole } from "../../../helper/getRoleCall";
import { AuthContext } from "../../../context/AuthProvider";
import useRole from "../../../hooks/Api/useRole";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  const [role] = useRole();

  console.log("role", role);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <FaBuffer />
          </div>
        </div>
      </div>

      {/* guest and host */}
      <div>
        <div className={`flex p-4 space-x-2 `}>
          {role === "host" && (
            <div className="flex flex-col space-y-4 bg-orange-500 px-8 py-2 rounded-lg text-neutral font-bold">
              Host
            </div>
          )}
          {role === "guest" && (
            <div className="flex flex-col space-y-4 bg-orange-500 px-8 py-2 rounded-lg text-neutral font-bold">
              Guest
            </div>
          )}
          {role === "Admin" && (
            <div className="flex flex-col space-y-4 bg-orange-500 px-8 py-2 rounded-lg text-neutral font-bold">
              Admin
            </div>
          )}
        </div>
        {/* if admin show this */}
        {/* if guest show this */}
        {/* if host show this */}
        {/* {
          role==="host" && 
        } */}
        {role === "host" ? (
          <div className="flex p-4 font-bold flex-col space-y-4">
            <Link to="statistics">Statistics</Link>
            <Link to="my-listing">my-listing</Link>
            <Link to="add-room">Add room</Link>
            <Link to="profile">Profile</Link>
          </div>
        ) : (
          <></>
        )}
        {role === "guest" ? (
          <div className="flex p-4 font-bold flex-col space-y-4">
            <Link to="statistics">Statistics</Link>
            <Link to="my-listing">my-booking</Link>
            <Link to="dashboard">Request for Host</Link>
            <Link to="profile">Profile</Link>
          </div>
        ) : (
          <></>
        )}
        {role === "admin" && (
          <div className="flex p-12 font-bold flex-col space-y-4">
            <Link to="statistics">Statistics</Link>
            <Link to="manage-user">manage User</Link>
            <Link to="profile">Profile</Link>
          </div>
        )}
      </div>
    </div>
  );
}
