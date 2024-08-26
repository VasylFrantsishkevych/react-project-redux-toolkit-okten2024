import { FC } from 'react'
import { Link } from 'react-router-dom';

import { IPokemon } from '../../models';

import styles from './PokemonSearchCard.module.css';

interface IProps {
   pokemon: IPokemon;
}


const PokemonSearchCard:FC<IProps> = ({pokemon}) => {
  return (
    <div className={styles.pokemon_card}>
      <Link className={styles.link_card} to={`/pokemons/${pokemon.name}`}>
        <h3 className={styles.pokemon_name}>{pokemon.name}</h3>
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      </Link>
    </div>
  )
}

export default PokemonSearchCard;