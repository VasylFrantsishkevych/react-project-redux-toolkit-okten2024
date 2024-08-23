import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonServise } from "../../services/pokemonServise";
import { AxiosError } from "axios";
import { IPokemon, IPokemonResponse } from "../../models";

const getPokemons = createAsyncThunk (
   'pokemonSlice/getPokemons',
   async (limit: number, thunkAPI) => {
       try {
            const response = await pokemonServise.getAll(limit);
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

export {
   getPokemons,
   getPokemonByName,
}