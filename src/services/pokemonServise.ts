import { urls } from "../constants/urls";
import { IPokemon, IPokemonResponse } from "../models";
import { axiosInstance } from "./axiosServise";

export const pokemonServise = {
  getAll: async (): Promise<IPokemonResponse> => {
    const response = await axiosInstance.get<IPokemonResponse>(urls.pokemons.base);
    return response.data;
  },
  getOneByName: async (name: string): Promise<IPokemon> => {
    const response = await axiosInstance.get<IPokemon>(urls.pokemons.byName(name)) ;
    return response.data;
  },
}