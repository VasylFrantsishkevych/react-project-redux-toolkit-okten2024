
export interface IType {
   id: number,
   name: string,
   pokemon: IPokemonByType[],
}

export interface IPokemonByType {
   pokemon: {
      name: string,
      url: string,
   }
}