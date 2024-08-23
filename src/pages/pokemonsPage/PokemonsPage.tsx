import React, { useEffect } from "react";
import { pokemonActions, useAppDispatch, useAppSelector } from "../../redux";

const PokemonsPage = () => {
  let limit = 0;
  let offset = 0;
  const { response, pokemons } = useAppSelector((state) => state.pokemonSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(pokemonActions.getPokemons(limit));
    response.results.forEach((pokemon) => {
      dispatch(pokemonActions.getPokemonByName(pokemon.name));
    });
  }, [limit]);
  console.log(response)
  console.log(pokemons);
  return <div>PokemonsPage</div>;
};

export default PokemonsPage;
