import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";
// import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import useAxiosSecure from "../../hooks/Api/useAxiosSecure";
import { FaSpinner } from "react-icons/fa";
import GoogleButton from "../../components/GoogleButton";
// import GoogleLogin from "../../components/GoogleLogin";

export default function SignUp() {
  const { createUser, updateUserProfile, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const image_key = import.meta.env.VITE_IMAGE_KEY;
  // console.log(image_key);
  const image_hoisting = `https://api.imgbb.com/1/upload?key=${image_key}`;
  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    /* if (password.length < 6) {
      return alert("password must be 6 characters long");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return alert("password must contain one uppercase");
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      return alert("password must contain one special character");
    } */
    const image = form.image.files[0];
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

    const userCreatedResult = await createUser(email, password);
    console.log("f", userCreatedResult.user.email);
    await updateUserProfile(name, data.display_url);
    // console.log(userCreatedResult);
    /* save user in monhodb */
    const users = {
      email: userCreatedResult.user.email,
      name: userCreatedResult.user.displayName,
      role: "guest",
      status: "verified",
    };
    // console.log("user", users);
    const res = await axiosSecure.put(`/users/${email}`, users);
    // console.log("res.data", res);

    // need a token
    // get token
    const tokenResponse = await axiosSecure.post(
      "/jwt",
      userCreatedResult.user.email
    );
    navigate("/");
    if (tokenResponse.data.success) {
      Swal.fire({
        icon: "success",
        title: "Registration successfull",
        text: `${users.name} You can now login`,
        timer: 1500,
      });
    }
    // console.log(tokenResponse);
  };

  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <h1 className="text-2xl text-center font-bold text-white">
        Welcome to Airbnb light
      </h1>
      <div className=" py-12 max-w-4xl mx-auto shadow-2xl shadow-sky-200 items-center justify-center">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-6 max-w-2xl mx-auto  "
        >
          <input
            type="name"
            name="name"
            id="name"
            placeholder="name..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
          <input
            type="file"
            name="image"
            id="image"
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />

          <input
            type="submit"
            value={"continue"}
            className="bg-slate-100 w-1/3 mx-auto cursor-pointer text-slate-800 py-4 px-8 rounded-lg hover:bg-slate-500 font-bold uppercase transition-colors duration-300"
          />
        </form>
        <p className="text-center font-semibold">
          register?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
        {/* <GoogleLogin /> */}
        <GoogleButton />
      </div>
    </div>
  );
}
