import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { abilityActions, useAppDispatch, useAppSelector } from '../../redux';

const AbilitiesPokemon = () => {
   const { abilities } = useAppSelector((state) => state.abilitySlice);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
 
   useEffect(() => {
     dispatch(abilityActions.getAbilities());
   }, [dispatch]);

   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const data = e.target.value.split(',')
      navigate(`/pokemons/ability/${data[1]}`, {state: {url: data[0], filterType: 'ability'}})
   }
  
  return (
    <div>
      <h3>Filter by Abilities</h3>
      <select onChange={handleChange}>
         {
            abilities.map(ability => 
               <option key={ability.url} value={[ability.url, ability.name]}>
                  {ability.name}
               </option>   
            )
         }
      </select>
   </div>
  )
}

export default AbilitiesPokemon