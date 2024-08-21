export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResults[];
}

interface IResults{
  name: string;
  url: string;
}