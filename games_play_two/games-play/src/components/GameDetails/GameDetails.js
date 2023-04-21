import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

export const GameDetails = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((result) => {
        setGame(result);
        return commentService.getAll(gameId);
      })
      .then((result) => setComments(result));
  }, [gameId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    await commentService.create({
      gameId,
      username,
      comment,
    });

    setUsername("");
    setComment("");
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
            {/* <!-- list all comments htmlFor current game (If any) --> */}
            {comments.map((comment) => (
              <li key={comment._id} className="comment">
                <p>
                  {comment.username}: {comment.comment}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only htmlFor creator of this game )  --> */}
        <div className="buttons">
          <Link to="/" className="button">
            Edit
          </Link>

          <Link to="/" className="button">
            Delete
          </Link>
        </div>
      </div>

      {/* <!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current game ) --> */}
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
