import { IPokemons } from "./IPokemons";

export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemons[];
}