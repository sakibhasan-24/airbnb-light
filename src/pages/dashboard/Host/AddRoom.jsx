import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../Form/AddRoomForm";
import axios from "axios";

export default function AddRoom() {
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
    // console.log(data.display_url);
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
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
      />
    </div>
  );
}
