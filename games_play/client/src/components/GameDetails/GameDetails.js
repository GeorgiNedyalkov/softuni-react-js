import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const GameDetails = () => {
  const { userId } = useContext(AuthContext);
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    // const result = await gameService.addComment(gameId, {
    //   username,
    //   comment,
    // });

    // setGame((state) => ({
    //   ...state,
    //   comments: { ...state.comments, [result._id]: result },
    // }));
    // setUsername("");
    // setComment("");
  };

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async (e) => {
    await gameService.delete(game._id);

    // TODO: delete from state

    navigate("/catalogue");
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

        {isOwner && (
          <div className="buttons">
            <Link to={`/catalogue/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button onClick={onDeleteClick} className="button">
              Delete
            </button>
          </div>
        )}
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
