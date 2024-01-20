import React from "react";

export default function RoomHeading({ room }) {
  return (
    <div>
      <div>
        <h1 className=" font-semibold text-2xl ">{room.title}</h1>
        <p className="mt-4 font-bold">{room.location}</p>
      </div>
      <div className="w-full rounded-md overflow-hidden md:h-[90vh]">
        <img className="object-cover w-full" src={room.image} alt="images" />
      </div>
    </div>
  );
}
