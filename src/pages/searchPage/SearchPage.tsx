import { useAppSelector } from '../../redux';
import PokemonSearchCard from '../../components/pokemonSearchCard/PokemonSearchCard';

const SearchPage = () => {
   const { pokemon } = useAppSelector((state) => state.pokemonSlice);

  return (
    <div>
      {pokemon && <PokemonSearchCard pokemon={pokemon}/>}
    </div>
  )
}

export default SearchPage;