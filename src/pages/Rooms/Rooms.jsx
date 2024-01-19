import React, { useEffect, useState } from "react";
import Room from "./Room";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <Room key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
}
