import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  return (
    <Link
      to={`/room/${room._id}`}
      className="flex flex-col border-t-2 shadow-2xl cursor-pointer shadow-slate-800 p-2 "
    >
      <div className="flex-1">
        <img
          src={room.image}
          alt="image"
          className="rounded-lg hover:scale-105 transition-all duration-1000 overflow-hidden ease-in-out"
        />
      </div>
      <div className="my-4 flex-1 font-semibold">
        <h1>{room.title}</h1>
        <p>{room.location}</p>
      </div>
    </Link>
  );
}
