import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IPokemon } from "../../models";
import { changeBGColor } from "../../utils/changeBgType";

import styles from "./PokemonDetails.module.css";

import "../../styles/styles.css";

interface IProps {
  pokemon: IPokemon;
}

const Pokemon: FC<IProps> = ({ pokemon }) => {
  const {
    id,
    name,
    height,
    weight,
    abilities,
    base_experience,
    forms,
    stats,
    types,
    sprites,
  } = pokemon;
  const navigate = useNavigate();

  const saveLocalStorage = (pokemon: IPokemon) => {
    const favoritePokemonsFromStorage = localStorage.getItem("pokemons");
    let favoritePokemons: IPokemon[];
    if (!favoritePokemonsFromStorage) {
      localStorage.setItem("pokemons", JSON.stringify([pokemon]));
    } else {
      favoritePokemons = JSON.parse(favoritePokemonsFromStorage)
      favoritePokemons.push(pokemon)
      localStorage.setItem('pokemons', JSON.stringify(favoritePokemons))
    }
  };

  return (
    <div className={styles.pokemon_container}>
      <div className={styles.pokemon_wrap}>
        <h1 className={styles.pokemon_name}>
          {name} - #{id}
        </h1>
        <div className={styles.pokemo_favorite}>
          <button onClick={() => saveLocalStorage(pokemon)}>Add to favorites</button>
        </div>
        {/* description--------------------------------------------------------- */}
        <div className={styles.pokemon_info}>
          <div className={styles.pokemon_img}>
            <img src={sprites.other.home.front_default} alt={name} />
          </div>
          <div className={styles.wrap}>
            <div className={styles.pokemon_description}>
              <p>
                <span>Height</span>
                {height}
              </p>
              <p>
                <span>Weight</span>
                {weight}
              </p>
              <p>
                <span>Base experience</span>
                {base_experience}
              </p>
              <div className={styles.pokemon_abilities_list}>
                Abilities
                <div className={styles.pokemon_abilities}>
                  {abilities.map((ability) => (
                    <p key={ability.ability.url}>{ability.ability.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.pokemon_types_list}>
              Types
              <div className={styles.pokemon_types}>
                {types.map((type) => (
                  <p
                    key={type.type.url}
                    className={changeBGColor(type.type.name)}
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.pokemon_forms_list}>
              Forms
              <div className={styles.pokemon_forms}>
                {forms.map((form) => (
                  <button
                    key={form.url}
                    className={styles.pokemon_forms_button}
                    onClick={() =>
                      navigate(`/pokemons/forms/${form.name}`, {
                        state: { form },
                      })
                    }
                  >
                    {form.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* stats---------------------------------------------------------------- */}
        <div className={styles.pokemon_stats_container}>
          <h3>Stats</h3>
          <div className={styles.pokemon_stats_list}>
            {stats.map(({ stat, base_stat }) => (
              <p key={stat.url}>
                <span>{stat.name}:</span>
                {base_stat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
