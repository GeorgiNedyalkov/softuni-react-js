export const CatalogueItem = ({ name, genres, imageUrl }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{genres}</h6>
        <h2>{name}</h2>
        <a href="#" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
};
