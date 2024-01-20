import axios from "axios";

export default function useAxiosPublic() {
  const useAxiosPublicData = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });
  return useAxiosPublicData;
}
