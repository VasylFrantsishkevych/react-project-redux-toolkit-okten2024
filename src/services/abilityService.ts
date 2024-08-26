import { urls } from "../constants/urls";
import { IPokemonResponse } from "../models";
import { axiosInstance } from "./axiosServise";

export const abilityService = {
   getAll: async (): Promise<IPokemonResponse> => {
      const response = await axiosInstance.get<IPokemonResponse>(`${urls.ability.base}?limit=367`);
      return response.data;
   }
}