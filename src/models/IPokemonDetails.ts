export interface IPokemonDetails {
  abilities: IAbility[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      home: {
        front_default: string;
        front_shiny: string;
      }
    }
  },
  stats: IStat[];
  types: IType[];
  weight: number;
}

interface IAbility {
  ability: {
    name: string;
    url: string;
  },
  is_hidden: boolean;
  slot: number;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name:string;
    url: string;
  }
}

interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}