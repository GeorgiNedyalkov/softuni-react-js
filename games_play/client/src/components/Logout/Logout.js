import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
  const { onLogout } = useAuthContext();

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/" />;
};
