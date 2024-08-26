import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { pokemonActions, useAppDispatch, useAppSelector } from '../../redux';
import PokemonDetails from '../../components/pokemonDetails/PokemonDetails';

const PokemonDetailsPage = () => {

   const { pokemon } = useAppSelector((state) => state.pokemonSlice);
   const dispatch = useAppDispatch();
   const {name} = useParams();
   
   useEffect(() => {
      if (name) dispatch(pokemonActions.getPokemonByName(name))
   }, []);

  return (
    <div>
      {pokemon && <PokemonDetails pokemon={pokemon}/>}
    </div>
  )
}

export default PokemonDetailsPage