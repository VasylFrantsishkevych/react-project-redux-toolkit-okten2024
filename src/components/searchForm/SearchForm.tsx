import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { pokemonActions, useAppDispatch } from "../../redux";

import styles from './SearchForm.module.css';

interface IFormSearch  {
   searchByName: string;
};

const SearchForm = () => {

  const {handleSubmit, register, reset} = useForm<IFormSearch>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const submit = (data: IFormSearch) => {
    dispatch(pokemonActions.getPokemonByName(data.searchByName))
   reset();
}

  return (
    <form className={styles.search} onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Search by name..." {...register('searchByName')}/>
      <button onClick={() => navigate(`pokemons/search`)}>Search</button>
    </form>
  )
}

export default SearchForm