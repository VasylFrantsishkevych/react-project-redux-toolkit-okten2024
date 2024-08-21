import { createSlice } from "@reduxjs/toolkit"
import { IPokemon, IPokemonResponse } from "../../models"
import { getPokemons } from "../reducers"

type PokemonSliceType = {
   pokemons: IPokemon[],
   isLoaded: boolean,
   error: string,
}

const pokemonInitState: PokemonSliceType = {
   pokemons: [],
   isLoaded: false,
   error: '',
}

export const pokemonSlice = createSlice({
   name: 'pokemonSlice',
   initialState: pokemonInitState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload

         })
   }
})

export const pokemonActions = {
   ...pokemonSlice.actions,
   getPokemons,
}