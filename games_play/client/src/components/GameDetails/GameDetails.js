import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";

export const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  console.log(game);

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const result = await gameService.addComment(gameId, {
      username,
      comment,
    });

    setGame((state) => ({
      ...state,
      comments: { ...state.comments, [result._id]: result },
    }));
    setUsername("");
    setComment("");
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt="" />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments &&
              Object.values(game.comments).map((c) => (
                <li key={c._id} className="comment">
                  <p>
                    {c.username}: {c.comment}
                  </p>
                </li>
              ))}
          </ul>
          {/* <!-- Display paragraph: If there are no games in the database --> */}
          {/* {!Object.values(game.comments).length && (
            <p className="no-comment">No comments.</p>
          )} */}
        </div>

        {/* <!-- Edit/Delete buttons ( Only htmlFor creator of this game )  --> */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onCommentSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Pesho"
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            placeholder="Comment......"
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};
