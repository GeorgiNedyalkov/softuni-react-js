import { useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";

const baseUrl = "https://swapi.dev/api/people";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <ul>
        {characters.map((c) => (
          <li key={c.url}>
            <CharacterListItem {...c} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
