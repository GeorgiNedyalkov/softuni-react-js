import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalogue } from "./components/Catalogue/Catalogue";

import * as gameService from "./services/gameService";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <div id="box">
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-game" element={<CreateGame />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
