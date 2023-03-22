import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as gameService from "./services/gameService";
import * as authService from "./services/authService";
import { AuthContext } from "./AuthContext";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { GameDetails } from "./components/GameDetails/GameDetails";

function App() {
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    setGames((state) => [...state], newGame);

    navigate("/catalogue");
  };

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

  const onLogout = () => {
    // TODO: authorized request
    setAuth({});
  };

  const context = {
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/create-game"
              element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
            />
            <Route path="/catalogue" element={<Catalogue games={games} />} />
            <Route path="/catalogue/:gameId" element={<GameDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
