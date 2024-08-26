import { urls } from "../constants";
import { IForm, IPokemon, IPokemonResponse, IType } from "../models";
import { axiosInstance } from "./axiosServise";

export const pokemonServise = {
  getAll: async (limit: number, offset: number): Promise<IPokemonResponse> => {
    const response = await axiosInstance.get<IPokemonResponse>(`${urls.pokemons.base}?limit=${limit}&offset=${offset}`);
    return response.data;
  },
  getOneByName: async (name: string): Promise<IPokemon> => {
    const response = await axiosInstance.get<IPokemon>(urls.pokemons.byName(name)) ;
    return response.data;
  },
  getPokemonsByType: async (url: string): Promise<IType> => {
    const response = await axiosInstance.get<IType>(url);
    return response.data;
 },
 getPokemonsByAbility: async (url: string): Promise<IType> => {
  const response = await axiosInstance.get<IType>(url);
  return response.data;
},
getFormsPokemon: async (url: string): Promise<IForm> => {
  const response = await axiosInstance.get<IForm>(url);
  return response.data;
}
}