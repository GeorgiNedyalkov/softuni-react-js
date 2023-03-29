import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import * as commentService from "../../services/commentService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";

import { AddComment } from "./AddComment/AddComment";

export const GameDetails = () => {
  const { gameId } = useParams();
  const { userId, isAuthenticated } = useAuthContext();
  const [game, setGame] = useState({});

  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, comments]) => {
      setGame({
        ...gameData,
        comments,
      });
    });
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(gameId, values.comment);

    setGame((state) => ({
      ...state,
      comments: [...state.comments, response],
    }));
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
              game.comments.map((c) => (
                <li key={c._id} className="comment">
                  <p>{c.comment}</p>
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

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};
