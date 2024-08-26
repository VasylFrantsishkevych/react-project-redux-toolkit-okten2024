import { FC } from 'react'

import { urls } from '../../constants/urls'

import styles from './Poster.module.css'

interface IProps {
   idPokemon: string,
   altData: string,
}

const Poster: FC<IProps> = ({idPokemon, altData}) => {
  return (
    <>
      <img className={styles.image} src={`${urls.images.imageMain(idPokemon)}`} alt={altData} />
    </>
  )
}

export default Poster