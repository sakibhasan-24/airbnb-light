import { useContext, useEffect, useState } from "react";
import { getRole } from "../../helper/getRoleCall";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function useRole() {
  //   const [role, setRole] = useState(null);
  //   const { user } = useContext(AuthContext);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     getRole(user?.email).then((data) => {
  //       setLoading(false);
  //       setRole(data);
  //     });
  //   }, [user?.email])
  const { user, loading } = useContext(AuthContext);
  const { data: role, isLoading } = useQuery({
    enabled: !!user?.email && !loading, // Only fetch data if user is logged in and has an email address
    queryKey: ["role", user?.email],
    queryFn: async () => getRole(user?.email),
  });
  return [role, isLoading];
}
