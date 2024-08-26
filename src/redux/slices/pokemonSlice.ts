import { createSlice } from "@reduxjs/toolkit"

import { IForm, IPokemon, IResults } from "../../models"
import { getFormsPokemon, getPokemonByName, getPokemons, getPokemonsByAbility, getPokemonsByType } from "../reducers"

type PokemonSliceType = {
   pokemons: IResults[]
   next: string | null,
   previous: string | null,
   pokemon: IPokemon | null,
   formsPokemon: IForm | null,
   limit: number;
   offset: number;
   isLoaded: boolean,
   error: string,
}

const pokemonInitState: PokemonSliceType = {
   pokemons: [],
   next: null,
   previous: null,
   pokemon: null,
   formsPokemon: null,
   limit: 20,
   offset: 0,
   isLoaded: false,
   error: '',
}

export const pokemonSlice = createSlice({
   name: 'pokemonSlice',
   initialState: pokemonInitState,
   reducers: {
      changeOffset: (state, {payload}) => {
         state.offset = payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getPokemons.fulfilled, (state, {payload: {results, next, previous}}) => {
            state.pokemons = results
            state.next = next
            state.previous = previous

         })
         .addCase(getPokemonByName.fulfilled, (state, {payload}) => {
            state.pokemon = payload
         })
         .addCase(getPokemonsByType.fulfilled, (state, {payload}) => {
            state.pokemons = payload.pokemon.map(({pokemon: {name, url}}) => {
               return {name, url}
            })
         })
         .addCase(getPokemonsByAbility.fulfilled, (state, {payload}) => {
            state.pokemons = payload.pokemon.map(({pokemon: {name, url}}) => {
               return {name, url}
            })
         })
         .addCase(getFormsPokemon.fulfilled, (state, {payload}) => {
            state.formsPokemon = payload
         })
   }
})

export const pokemonActions = {
   ...pokemonSlice.actions,
   getPokemons,
   getPokemonByName,
   getPokemonsByType,
   getPokemonsByAbility,
   getFormsPokemon,
}