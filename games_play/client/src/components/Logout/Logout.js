import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export const Logout = () => {
  const { onLogout } = useContext(AuthContext);

  onLogout();

  return <Navigate to="/" />;
};
