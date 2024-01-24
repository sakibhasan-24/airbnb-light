import React, { useContext, useState } from "react";
import { Calendar } from "react-date-range";
import DateSelect from "./DateSelect";
import { formatDistance, addDays } from "date-fns";
import BookingModal from "./Modal/BookingModal";
import { AuthContext } from "../../../context/AuthProvider";

export default function RoomReservation({ room }) {
  const { user } = useContext(AuthContext);
  // console.table(room);
  //   console.log(formatDistance);
  //   console.log(room?.from, room?.to);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const fromDate = new Date(room?.from ?? new Date());
  const toDate = new Date(room?.to ?? new Date());
  // console.log(fromDate);
  // console.log(fromDate);
  const totalDays = parseInt(formatDistance(toDate, fromDate).split(" ")[0]);
  // console.log(totalDays);
  const totalPrice = parseFloat(totalDays * room?.price);

  //   const totalPrice = room?.price * totalDays;

  const [value, setValue] = useState({
    startDate: new Date(room?.from ?? new Date()),
    endDate: new Date(room?.to ?? addDays(new Date(), 4)),
    key: "selection",
  });

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    },

    from: value.startDate,
    to: value.endDate,
    price: room?.totalPrice,
    host: room?.host?.email,
    location: room?.location,
    roomId: room?._id,
    title: room?.title,
    image: room?.image,
  });
  // console.log(bookingInfo);
  // console.log(value);
  return (
    <div className="md:ml-6  rounded-lg border-2 border-slate-400   overflow-hidden ">
      <div className="flex gap-2 sm:ml-12">
        <h1 className="font-bold text-2xl">${room?.price}</h1>
        <p className="text-xl font-light">night</p>
      </div>
      <div className="flex items-center justify-center">
        <DateSelect value={value} />
      </div>
      <div className="w-3/4 mx-auto my-4">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full mx-auto bg-orange-600 text-xl font-bold rounded-lg py-2 text-slate-950 hover:bg-orange-950 hover:text-slate-100 px-4"
        >
          Reserved
        </button>
      </div>
      <div className=" sm:ml-12 font-bold text-xl flex items-center justify-between">
        <h1>Total</h1>
        <h1>${totalPrice}</h1>
      </div>
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={bookingInfo}
      />
    </div>
  );
}
