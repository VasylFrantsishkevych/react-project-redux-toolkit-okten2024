import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { pokemonActions, useAppDispatch, useAppSelector } from '../../redux';
import PokemonFormCard from '../../components/pokemonFormCard/PokemonFormCard';

const PokemonFormPage = () => {

   const { formsPokemon } = useAppSelector((state) => state.pokemonSlice);
   const dispatch = useAppDispatch();
   const {state} = useLocation();

   useEffect(() => {
     if (state) dispatch(pokemonActions.getFormsPokemon(state.form.url))
   }, [dispatch, state]);

   console.log(formsPokemon)
  return (
    <div>
      {formsPokemon && <PokemonFormCard formPokemon={formsPokemon}/>}
    </div>
  )
}

export default PokemonFormPage