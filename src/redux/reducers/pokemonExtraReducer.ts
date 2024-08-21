import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonServise } from "../../services/pokemonServise";
import { AxiosError } from "axios";
import { IPokemon } from "../../models";

const getPokemons = createAsyncThunk(
   'pokemonSlice/getPokemons',
   async (_, thunkAPI) => {
       try {
            let pokemons: IPokemon[] = [];
            const response = await pokemonServise.getAll();
            response.results.forEach( async (pokemon) => {
                const data = await pokemonServise.getOneByName(pokemon.name)
                console.log(data)
                pokemons.push(data)
            }) 
            return thunkAPI.fulfillWithValue(pokemons);
       } catch (e) {
           let error = e as AxiosError;
           return thunkAPI.rejectWithValue(error?.response?.data);
       }
   }
)

export {
   getPokemons,
}