import { createSlice } from "@reduxjs/toolkit"
import { IPokemon, IPokemonResponse } from "../../models"
import { getPokemonByName, getPokemons } from "../reducers"

type PokemonSliceType = {
   response: IPokemonResponse,
   pokemons: IPokemon[],
   isLoaded: boolean,
   error: string,
}

const pokemonInitState: PokemonSliceType = {
   response: {
      count: 0,
      next: null,
      previous: null,
      results: []
   },
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
            state.response = action.payload

         })
         .addCase(getPokemonByName.fulfilled, (state, action) => {
            state.pokemons.push(action.payload)
         })
   }
})

export const pokemonActions = {
   ...pokemonSlice.actions,
   getPokemons,
   getPokemonByName,
}