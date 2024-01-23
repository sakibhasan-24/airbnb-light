import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useAxiosSecure from "../../../hooks/Api/useAxiosSecure";

export default function Table() {
  const [rooms, setRooms] = useState([]);
  const useAxiosSecureData = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getRoomsByEmail = async (email) => {
      // console.log(email);
      const res = await useAxiosSecureData.get(`/rooms/${email}`);
      //   console.log(res.data);
      setRooms(res.data);
    };
    getRoomsByEmail(user?.email);
  }, [user?.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-slate-400 text-black font-semibold text-xl rounded-lg p-8 text-center ">
            <th>image</th>
            <th>Title</th>
            <th>Location</th>
            <th>price</th>
            <th>From</th>
            <th>to</th>
            <th>Edit </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 3 */}
          {rooms &&
            rooms.map((room) => (
              <tr key={room._id} className="text-xs">
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        className="w-[20px] h-[20px]"
                        src={room.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{room?.title}</td>
                <td>{room?.location}</td>
                <td>${room?.price || 499}</td>
                <td>{room?.from}</td>
                <td>{room?.to}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
