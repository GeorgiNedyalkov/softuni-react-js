import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as gameService from "./services/gameService";
import * as authService from "./services/authService";
import { AuthContext } from "./AuthContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
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
    console.log("clicked");
    try {
      const result = await authService.login(data);
      setAuth(result);
    } catch (error) {
      console.log(`There has been a problem here is the error: ${error}`);
    }
  };

  return (
    <AuthContext.Provider value={{ onLoginSubmit }}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
