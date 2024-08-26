export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResults[];
}

export interface IResults{
  name: string;
  url: string;
}