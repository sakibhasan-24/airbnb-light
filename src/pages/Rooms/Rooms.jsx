import React, { useEffect, useState } from "react";
import Room from "./Room";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../../components/EmptyState";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  //   console.log(category);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const categoryRooms = data?.filter(
            (room) => room.category === category
          );
          setRooms(categoryRooms);
        } else {
          setRooms(data);
        }
      });
  }, [category]);
  return (
    <div>
      {rooms && rooms.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Room key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-400px)] bg-slate-200 text-slate-950 rounded-lg p-6">
          <EmptyState title="no Rooms found" text={"select Others category"} />
        </div>
      )}
    </div>
  );
}
