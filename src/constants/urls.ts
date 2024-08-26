const baseURL = 'https://pokeapi.co/api/v2';

const urls = {
  pokemons: {
    base: '/pokemon',
    byName: (name: string): string => `${urls.pokemons.base}/${name}`
  },
  type: {
    base: '/type',
  },
  ability: {
    base: '/ability'
  },
  images: {
    imageMain: (idPokemon: string): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`,
  }
}

export {
  urls,
   baseURL
}