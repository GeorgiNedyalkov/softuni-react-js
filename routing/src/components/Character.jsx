import styles from "./Navigation.module.css";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharacterFilms } from "./CharacterFilms";

const baseUrl = "https://swapi.dev/api/people";

export const Character = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/${characterId}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [characterId]);

  const onBackButtonClick = () => {
    navigate("/characters");
  };

  return (
    <>
      <h1>Character Page</h1>
      <h2>{character.name}</h2>
      <button onClick={onBackButtonClick}>Back</button>

      <nav className={styles.navigation}>
        <li>
          <Link to="films">Films</Link>
        </li>
        <li>
          <Link to="vehicles">Vehicles</Link>
        </li>
        <li>
          <Link to="starships">Starships</Link>
        </li>
      </nav>

      <Routes>
        <Route path="/films" element={<CharacterFilms />} />
        <Route path="/vehicles" element={<h5>Vehicles</h5>} />
        <Route path="/starships" element={<h5>Star ships</h5>} />
      </Routes>
    </>
  );
};
