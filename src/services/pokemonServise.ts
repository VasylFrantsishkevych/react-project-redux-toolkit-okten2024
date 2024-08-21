import { urls } from "../constants/urls";
import { IPokemonResponse } from "../models";
import { axiosInstance } from "./axiosServise";

export const pokemonServise = {
  getAll: async (): Promise<IPokemonResponse> => {
    const response = await axiosInstance.get<IPokemonResponse>(urls.pokemons.base);
    return response.data;
},
}