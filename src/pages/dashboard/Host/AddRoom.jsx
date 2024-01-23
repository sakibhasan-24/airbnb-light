import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../Form/AddRoomForm";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";
import useAxiosSecure from "../../../hooks/Api/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [imageText, setImageText] = useState("upload Image");
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    endDate: new Date(),
    startDate: new Date(),
    key: "selection", //This is a react-date-range thing, don't worry about it.
  });
  const image_key = import.meta.env.VITE_IMAGE_KEY;
  // console.log(image_key);
  const image_hoisting = `https://api.imgbb.com/1/upload?key=${image_key}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const bedrooms = form.bedrooms.value;
    const description = form.description.value;
    const to = dates.endDate;
    const from = dates.startDate;

    const imageForm = new FormData();
    imageForm.append("image", image);
    // advance destructuring
    const {
      data: { data },
    } = await axios.post(image_hoisting, imageForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // host
    const host = {
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    };
    const roomData = {
      host,
      location,
      category,
      title,
      price,
      image: data.display_url,
      guests,
      bathrooms,
      bedrooms,
      description,
      to,
      from,
    };
    console.table(roomData);
    // save in the db
    const res = await axiosSecure.post("/room", roomData);
    console.table(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Room Added Successfully",
        timer: 1500,
      });
      navigate("my-listing");
    }
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  const handleImageChange = (image) => {
    setImageText(image.name);
  };
  return (
    <div>
      <Helmet>
        <title>Add Room</title>
      </Helmet>
      <AddRoomForm
        handleSubmit={handleSubmit}
        dates={dates}
        handleDates={handleDates}
        loading={loading}
        handleImageChange={handleImageChange}
        imageText={imageText}
      />
    </div>
  );
}
