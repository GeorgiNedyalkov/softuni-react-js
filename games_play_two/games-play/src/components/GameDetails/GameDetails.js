import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";

export const GameDetails = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { userId } = useAuthContext();
  const [game, setGame] = useState({});
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const gameService = useService(gameServiceFactory);

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

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async () => {
    await gameService.delete(game._id);

    // TODO: delete from state

    navigate("/catalogue");
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <h1>{game.title}</h1>
          <span className="levels">{game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments &&
              Object.values(game.comments).map((comment) => (
                <li key={comment._id} className="comment">
                  <p>
                    {comment.username}: {comment.comment}
                  </p>
                </li>
              ))}
          </ul>

          {/* {!Object.values(game.comments).length && (
            <p className="no-comment">No comments.</p>
          )} */}
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/catalogue/${gameId}/edit`} className="button">
              Edit
            </Link>

            <button onClick={onDeleteClick} className="button">
              Delete
            </button>
          </div>
        )}
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onCommentSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
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
