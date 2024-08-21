import React, { useEffect } from 'react'
import { pokemonActions, useAppDispatch, useAppSelector } from '../../redux';


const PokemonsPage = () => {

  const {pokemons} = useAppSelector(state => state.pokemonSlice)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(pokemonActions.getPokemons())
  }, []);
  console.log(pokemons)
  return (
    <div>PokemonsPage</div>
  )
}

export default PokemonsPage