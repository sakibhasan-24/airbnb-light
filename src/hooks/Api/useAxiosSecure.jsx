import axios from "axios";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export default function useAxiosSecure() {
  //   const navigate = useNavigate();
  //   intercept response and check unauthorized user
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        //redirect to login page
        // navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}
