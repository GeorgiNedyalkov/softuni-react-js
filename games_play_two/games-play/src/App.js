import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { GameDetails } from "./components/GameDetails/GameDetails";

import * as gameService from "./services/gameService";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    setGames((state) => [...state, newGame]);

    navigate("/catalogue");
  };

  const onLoginSubmit = async (values) => {
    console.log(values);
  };

  return (
    <AuthContext.Provider value={{ onLoginSubmit }}>
      <div className="App">
        <Header />

        <div id="box">
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
        </div>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
