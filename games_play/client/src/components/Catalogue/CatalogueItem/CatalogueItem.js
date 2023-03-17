export const CatalogueItem = ({ name, imageUrl, genre }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} alt="" />
        <h6>{genre}</h6>
        <h2>{name}</h2>
        <a href="/" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
};
