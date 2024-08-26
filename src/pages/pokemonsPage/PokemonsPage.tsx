import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { pokemonActions, useAppDispatch, useAppSelector } from "../../redux";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import PaginationComponent from "../../components/pagination/Pagination";
import TypesPokemon from "../../components/typesPokemon/TypesPokemon";
import AbilitiesPokemon from "../../components/abilitiesPokemon/AbilitiesPokemon";

import styles from './PokemonPage.module.css';

const PokemonsPage = () => {
  const { pokemons, next, previous, limit, offset } = useAppSelector((state) => state.pokemonSlice);
  const dispatch = useAppDispatch();
  let { state } = useLocation();
 
  useEffect(() => {
        fetchData()
  }, [dispatch, offset, limit, state]);

  function fetchData () {
    if (state === null) {
      dispatch(pokemonActions.getPokemons({limit, offset}));
      
    } else if (state.filterType === 'type') {
      dispatch(pokemonActions.getPokemonsByType(state.url))
    } else if (state.filterType === 'ability') {
      dispatch(pokemonActions.getPokemonsByAbility(state.url))
    }
  }

  return (
    <div>
      <div className={styles.pokemon_filter}>
        <TypesPokemon/>
        <AbilitiesPokemon/>
      </div>
      <div className={styles.pokemons_container}>
        <div className={styles.pokemons_list}>
          {
            pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}/>)
          }
        </div>
      </div>
      <div className={styles.pagination_container}>
        <PaginationComponent next={next} prev={previous} offset={offset} limit={limit}/>
      </div>
    </div>
  )
};

export default PokemonsPage;
