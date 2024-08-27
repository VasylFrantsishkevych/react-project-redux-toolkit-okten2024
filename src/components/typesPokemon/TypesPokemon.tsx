import { useEffect } from 'react'

import { typeActions, useAppDispatch, useAppSelector } from '../../redux';
import Type from './type/TypePokemon';

import styles from './TypesPokemon.module.css'

const TypesPokemon = () => {
   const { responseType: {results}, isLoaded } = useAppSelector((state) => state.typeSlice);
   const dispatch = useAppDispatch();
 
   useEffect(() => {
     dispatch(typeActions.getTypes());
   }, [dispatch]);
  
   return (
      <div className={styles.pokemon_types_container}>
         {!isLoaded && <h2>Loaging...</h2>}
         <h3>Filter by type</h3>
         <div className={styles.pokemon_types}>
            {
               results.map(type => <Type key={type.url} type={type}/>)
            }
         </div>
      </div>
   )
 };

export default TypesPokemon