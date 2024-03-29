import { CatalogueItem } from "./CatalogueItem/CatalogueItem";

export const Catalogue = ({ games }) => {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.map((game) => (
        <CatalogueItem key={game._id} {...game} />
      ))}

      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
};
