import { Link } from "react-router-dom";
import GoogleButton from "../../components/GoogleButton";
import useAxiosSecure from "../../hooks/Api/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function Login() {
  const axiosSecure = useAxiosSecure();
  const { userLogIn, loading } = useContext(AuthContext);
  console.log(loading);
  const handleLogIn = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const userLogInRes = await userLogIn(email, password);
    // console.log("f", userLogIn.user.email);
    const tokenResponse = await axiosSecure.post("/jwt", email);
    if (tokenResponse.data.success) {
      Swal.fire({
        icon: "success",
        title: "logIn successfull",
        text: `${userLogInRes.user.displayName} welcome`,
        timer: 1500,
      });
      navigate("/");
    }
    // console.log(tokenResponse);
  };
  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <h1 className="text-2xl text-center font-bold text-white">
        Welcome to Airbnb light login
      </h1>
      <div className=" py-12 max-w-4xl mx-auto shadow-2xl shadow-sky-200 items-center justify-center">
        <form
          onSubmit={handleLogIn}
          className="flex flex-col gap-6 max-w-2xl mx-auto  "
        >
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
            value={"Login"}
            className="bg-slate-100 w-1/3 mx-auto cursor-pointer text-slate-800 py-4 px-8 rounded-lg hover:bg-slate-500 font-bold uppercase transition-colors duration-300"
          />
        </form>
        <p className="text-center font-semibold">
          register?{" "}
          <Link className="text-blue-500" to="/signup">
            SignUp
          </Link>
        </p>
        {/* <GoogleLogin /> */}
        <GoogleButton />
      </div>
    </div>
  );
}
