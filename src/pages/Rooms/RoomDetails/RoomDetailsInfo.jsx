import React from "react";

export default function RoomDetailsInfo({ room }) {
  return (
    <div className=" col-span-4 flex flex-col gap-4">
      <div className="flex gap-2">
        <h1>Hosted By {room?.host?.name}</h1>
        <img
          src={room?.host?.image}
          alt=""
          className="rounded-full w-[30px] h-[30px]"
        />
      </div>
      <div className="flex gap-4 text-slate-300">
        <h1>{room?.guests} guests</h1>
        <h1>{room?.bedrooms}bedroom</h1>
        <h1>{room?.bathrooms} bathrooms</h1>
      </div>
      <hr />
      <div>
        <p>{room.description}</p>
      </div>
    </div>
  );
}
