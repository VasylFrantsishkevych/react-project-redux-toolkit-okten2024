import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import { IPokemon } from "../../models";

import styles from "./FavoritePokemonsPage.module.css";

const FavoritePokemonsPage = () => {
  const pokemonsJSON = localStorage.getItem("pokemons");
  let pokemons: IPokemon[] | undefined = undefined;
  if (pokemonsJSON) pokemons = JSON.parse(pokemonsJSON);

  const deleteFavoritePokemon = (id: number) => {
    if (pokemons) {
      const index = pokemons.findIndex((pokemon) => pokemon.id === id);
      if (index > -1) {
        pokemons.splice(index, 1);
      }

      localStorage.setItem("pokemons", JSON.stringify(pokemons));
      window.location.reload();
    }
  };

  return (
    <div className={styles.pokemon_favorite_list}>
      {pokemons &&
        pokemons.map((pokemon) => (
          <FavoriteCard
            key={pokemon.id}
            pokemon={pokemon}
            deleteFavoritePokemon={deleteFavoritePokemon}
          />
        ))}
    </div>
  );
};

export default FavoritePokemonsPage;
