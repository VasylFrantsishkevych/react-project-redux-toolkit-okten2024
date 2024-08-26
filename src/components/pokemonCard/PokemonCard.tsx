import { FC } from 'react'
import { Link } from 'react-router-dom';

import { IResults } from '../../models'
import Poster from '../poster/Poster';

import styles from './PokemonCard.module.css'

interface IProps {
   pokemon: IResults;
}

const PokemonCard:FC<IProps> = ({pokemon}) => {
   const {name, url} = pokemon;
   const idPokemon = url.split('/').slice(-2)[0]
  return (
    <div className={styles.pokemon_card}>
      <Link className={styles.link_card} to={`/pokemons/${name}`}>
        <h3 className={styles.pokemon_name}>{name}</h3>
        <Poster altData='name' idPokemon={idPokemon}/>
      </Link>
    </div>
  )
}

export default PokemonCard