import { FC } from 'react'
import { Link } from 'react-router-dom';

import { IResults } from '../../../models'
import { changeBGColor } from '../../../utils/changeBgType';

import styles from './TypePokemon.module.css'

interface IProps {
   type: IResults;
}

const TypePokemon: FC<IProps> = ({type}) => {
  return (
    <Link to={`/pokemons/type/${type.name}`} state={{url: type.url, filterType: 'type'}} className={styles.link_type}>
      <div className={`${styles.pokemon_type} ${changeBGColor(type.name)}` }>{type.name}</div>
    </Link>
  )
}

export default TypePokemon;