import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IPokemonResponse } from "../../models";
import { pokemonServise } from "../../services";

const getPokemons = createAsyncThunk<IPokemonResponse, {limit: number, offset: number}> (
   'pokemonSlice/getPokemons',
   async ({limit, offset}, thunkAPI) => {
       try {
            const response = await pokemonServise.getAll(limit, offset);
            return thunkAPI.fulfillWithValue(response);
       } catch (e) {
           let error = e as AxiosError;
           return thunkAPI.rejectWithValue(error?.response?.data);
       }
   }
)

const getPokemonByName = createAsyncThunk(
    'pokemonSlice/getPokemonByName',
    async (name: string, thunkAPI) => {
        try {
             const pokemon = await pokemonServise.getOneByName(name);
             return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
 )

 const getPokemonsByType = createAsyncThunk (
    'pokemonSlice/getPokemonsByType',
    async (url: string, thunkAPI) => {
        try {
             const pokemonsByTypes = await pokemonServise.getPokemonsByType(url);
             return thunkAPI.fulfillWithValue(pokemonsByTypes);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
 )
 const getPokemonsByAbility = createAsyncThunk (
    'pokemonSlice/getPokemonsByAbility',
    async (url: string, thunkAPI) => {
        try {
             const pokemonsByAbility = await pokemonServise.getPokemonsByAbility(url);
             return thunkAPI.fulfillWithValue(pokemonsByAbility);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
 )
 const getFormsPokemon = createAsyncThunk (
    'pokemonSlice/getFormsPokemon',
    async (url: string, thunkAPI) => {
        try {
             const pokemonForms = await pokemonServise.getFormsPokemon(url);
             return thunkAPI.fulfillWithValue(pokemonForms);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
 )

export {
   getPokemons,
   getPokemonByName,
   getPokemonsByType,
   getPokemonsByAbility,
   getFormsPokemon,
}