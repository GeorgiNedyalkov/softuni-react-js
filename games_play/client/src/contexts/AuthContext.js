import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  const authService = authServiceFactory(auth.token);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
    } catch (error) {
      console.log(`There has been a problem here is the error: ${error}`);
    }

    navigate("/catalogue");
  };

  const onRegisterSubmit = async (values) => {
    // password confirmation should be extracted somewhere else
    const { confirmPassword, ...registerData } = values;

    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/catalogue");
    } catch (error) {
      console.log(`There has been a problem here is the error: ${error}`);
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
