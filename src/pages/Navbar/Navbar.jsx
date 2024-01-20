import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Navbar() {
  const { user, userLogOut } = useContext(AuthContext);
  // console.log(user);
  const handleUserLogOut = () => {
    userLogOut();
  };
  return (
    <div className="max-w-5xl mx-auto shadow-2xl  flex items-center justify-between ">
      <div>
        <Link to="/">
          <img
            className="w-[80px] h-[44px] rounded-md shadow-xl my-4"
            src="https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <div className="dropdown dropdown-hover ">
          <div tabIndex={0}>
            <img
              className="w-[50px] h-[44px] rounded-md shadow-xl my-4"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
              }
              alt="user photo"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] space-y-4 font-semibold text-xs menu p-2 shadow bg-base-100 rounded-box w-full "
          >
            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={handleUserLogOut}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
