import { FC } from 'react';

import { IForm } from '../../models/IForm';

import styles from './PokemonFormCard.module.css';

interface IProps {
   formPokemon: IForm;
}

const PokemonFormCard: FC<IProps> = ({formPokemon}) => { 

  return (
    <div className={styles.pokemon_form_card}>
      <div className={styles.pokemon_form_name}>
         <h3>{formPokemon.name} - #{formPokemon.id}</h3>
      </div>
      <div className={styles.pokemon_form_img}>
         <img src={formPokemon.sprites.front_default} alt={formPokemon.name} />
         <img src={formPokemon.sprites.back_default} alt={formPokemon.name} />
         <img src={formPokemon.sprites.front_shiny} alt={formPokemon.name} />
         <img src={formPokemon.sprites.back_shiny} alt={formPokemon.name} />
      </div>
    </div>
  )
}

export default PokemonFormCard