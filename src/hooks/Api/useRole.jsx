import { useContext, useEffect, useState } from "react";
import { getRole } from "../../helper/getRoleCall";
import { AuthContext } from "../../context/AuthProvider";

export default function useRole() {
  const [role, setRole] = useState(null);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    getRole(user?.email).then((data) => setRole(data));
  }, [user?.email]);
  return [role];
}
