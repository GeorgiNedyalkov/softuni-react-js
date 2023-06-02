import { useEffect, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import { useService } from "../../hooks/useService";
import * as commentService from "../../services/commentService";
import { useAuthContext } from "../../contexts/AuthContext";
import { gameReducer } from "../../reducers/gameReducer";

import { AddComment } from "./AddComment/AddComment";

export const GameDetails = () => {
  const { gameId } = useParams();
  const [game, dispatch] = useReducer(gameReducer, {});
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, comments]) => {
      const gameState = {
        ...gameData,
        comments,
      };
      dispatch({ type: "GAME_FETCH", payload: gameState });
    });
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(gameId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
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
              game.comments.map((comment) => (
                <li key={comment._id} className="comment">
                  <p>
                    {comment.author.email}: {comment.comment}
                  </p>
                </li>
              ))}
          </ul>

          {!game.comments?.length && <p className="no-comment">No comments.</p>}
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

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};
