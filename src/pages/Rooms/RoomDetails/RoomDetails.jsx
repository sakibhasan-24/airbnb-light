import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import RoomHeading from "./RoomHeading";
import RoomDetailsInfo from "./RoomDetailsInfo";
import Calendar from "./DateSelect";
import RoomReservation from "./RoomReservation";

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data.find((room) => room._id === id));
      });
  }, [id]);
  return (
    <div className="max-w-6xl mx-auto  ">
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <div>
        <div className="flex flex-col gap-6 my-6">
          <RoomHeading room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 mb-4 gap-6">
          <RoomDetailsInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last ">
            {/* room reservation with calendar price */}
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
