import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const baseUrl = "https://swapi.dev/api";

export const CharacterFilms = () => {
  const [films, setFilms] = useState([]);
  const { characterId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/films`)
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, [characterId]);

  return (
    <div>
      <h1>Character Films</h1>

      {films.map((film) => {
        const id = film.url
          .split("/")
          .filter((x) => x)
          .pop();

        return (
          <li key={id}>
            <Link to={`/films/${id}`}>{film.title}</Link>
          </li>
        );
      })}
    </div>
  );
};
