import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/Api/useAxiosSecure";

export default function GoogleButton() {
  const { googleLogIn } = useContext(AuthContext);
  const useAxiosSecureData = useAxiosSecure();
  const handleGoogleSignIn = async () => {
    const userCreatedResult = await googleLogIn();
    const users = {
      email: userCreatedResult.user.email,
      name: userCreatedResult.user.displayName,
      role: "admin",
      status: "verified",
    };
    const res = await useAxiosSecureData.put(`/users/${email}`, users);
    if (res.data.insertedId) {
      const tokenResponse = await useAxiosSecure.post(
        "/jwt",
        userCreatedResult.user.email
      );
      if (tokenResponse.data.success) {
        Swal.fire({
          icon: "success",
          title: "Registration successfull",
          text: `${users.name} You can now login`,
          timer: 1500,
        });
        navigate("/");
      }
    }
  };
  return (
    <div className="flex items-center justify-center my-6">
      <button
        onClick={handleGoogleSignIn}
        className="rounded-md px-4 py-2 bg-orange-900 text-white font-bold"
      >
        Continue With Google
      </button>
    </div>
  );
}
