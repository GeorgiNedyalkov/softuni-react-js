import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Character } from "./components/Character";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:characterId/*" element={<Character />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
