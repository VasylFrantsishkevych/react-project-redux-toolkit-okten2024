import { Link } from 'react-router-dom';

import SearchForm from '../searchForm/SearchForm';
import { pokemonSlice, useAppDispatch } from '../../redux';

import styles from './Header.module.css';



const Header = () => {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(pokemonSlice.actions.changeOffset(0))
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_nav_item}>
        <Link className={styles.link} to={'/pokemons'} onClick={() => handleClick()}>Pokemons</Link>
        <Link className={styles.link} to={'/favorites'}>Favorites</Link>
        <SearchForm/>
      </div>
    </div>
  )
}

export default Header