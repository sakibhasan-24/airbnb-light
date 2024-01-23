import useAxiosSecure from "../hooks/Api/useAxiosSecure";

const axiosSecure = useAxiosSecure();
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data.role;
};
