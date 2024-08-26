import { FC } from "react";
import { Link } from "react-router-dom";

import { IPokemon } from "../../models";

import styles from "./FavoriteCard.module.css";

interface IProps {
  pokemon: IPokemon;
  deleteFavoritePokemon: (id: number) => void;
}

const FavoriteCard: FC<IProps> = ({ pokemon, deleteFavoritePokemon }) => {
  return (
    <div className={styles.pokemon_favorite_card}>
      <Link
        className={styles.pokemon_favorite_link_card}
        to={`/pokemons/${pokemon.name}`}
      >
        <h3 className={styles.pokemon_favorite_name}>{pokemon.name}</h3>
        <img
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
      </Link>
      <button onClick={() => deleteFavoritePokemon(pokemon.id)}>Delete</button>
    </div>
  );
};

export default FavoriteCard;
