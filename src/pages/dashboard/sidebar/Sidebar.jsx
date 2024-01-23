import React from "react";
import { FaBuffer } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
        <div className="flex p-4 space-x-2">
          <button className="bg-slate-400 text-black font-bold px-4 py-2 rounded-lg ">
            Guest
          </button>
          <button>Host</button>
        </div>
        <div className="flex p-4 font-bold flex-col space-y-4">
          <Link to="statistics">Statistics</Link>
          <Link to="my-listing">my-listing</Link>
          <Link to="add-room">Add room</Link>
        </div>
      </div>
    </div>
  );
}
