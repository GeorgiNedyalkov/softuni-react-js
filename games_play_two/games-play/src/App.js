import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { EditGame } from "./components/EditGame/EditGame";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { GameDetails } from "./components/GameDetails/GameDetails";

import { AuthProvider } from "./contexts/AuthContext";
import { gameServiceFactory } from "./services/gameService";
// import { withAuth } from "./hoc/withAuth";

const App = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(); // auth.accessToken

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

  const onGameEditSubmit = async (values) => {
    const updatedGame = await gameService.edit(values._id, values);

    setGames((state) =>
      state.map((game) => (game._id === values._id ? updatedGame : game))
    );

    navigate(`/catalogue/${values._id}`);
  };

  // const EnchancedLogin = withAuth(Login);

  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <div id="box">
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
              <Route
                path="/catalogue/:gameId/edit"
                element={<EditGame onGameEditSubmit={onGameEditSubmit} />}
              />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
