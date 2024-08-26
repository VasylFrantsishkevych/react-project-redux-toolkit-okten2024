import { urls } from "../constants/urls";
import { IPokemonResponse } from "../models";
import { axiosInstance } from "./axiosServise";

export const typeService = {
   getAll: async (): Promise<IPokemonResponse> => {
      const response = await axiosInstance.get<IPokemonResponse>(`${urls.type.base}?limit=21`);
      return response.data;
   }
}