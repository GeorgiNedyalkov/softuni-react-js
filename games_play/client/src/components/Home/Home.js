export const Home = () => {
  return (
    <>
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />

        <div id="home-page">
          <h1>Latest Games</h1>

          {/* <!-- Display div: with information about every game (if any) --> */}
          <div className="game">
            <div className="image-wrap">
              <img src="./images/CoverFire.png" />
            </div>
            <h3>Cover Fire</h3>
            <div className="rating">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">
                Details
              </a>
            </div>
          </div>
          <div className="game">
            <div className="image-wrap">
              <img src="./images/ZombieLang.png" />
            </div>
            <h3>Zombie Lang</h3>
            <div className="rating">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">
                Details
              </a>
            </div>
          </div>
          <div className="game">
            <div className="image-wrap">
              <img src="./images/MineCraft.png" />
            </div>
            <h3>MineCraft</h3>
            <div className="rating">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">
                Details
              </a>
            </div>
          </div>

          {/* <!-- Display paragraph: If there is no games  --> */}
          <p className="no-articles">No games yet</p>
        </div>
      </section>

      {/* <!--Details Page--> */}
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src="images/MineCraft.png" />
            <h1>Bright</h1>
            <span className="levels">MaxLevel: 4</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>

          <p className="text">
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill htmlFor. Set in a world where fantasy
            creatures live side by side with humans. A human cop is forced to
            work with an Orc to find a weapon everyone is prepared to kill
            htmlFor.
          </p>

          {/* <!-- Bonus ( htmlFor Guests and Users ) --> */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* <!-- list all comments htmlFor current game (If any) --> */}
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            <p className="no-comment">No comments.</p>
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
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </section>
    </>
  );
};
