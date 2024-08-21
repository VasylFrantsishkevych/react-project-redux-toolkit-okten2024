const baseURL = 'https://pokeapi.co/api/v2';

const urls = {
  pokemons: {
    base: '/pokemon',
    byName: (name: string): string => `${urls.pokemons.base}/${name}`
  }
}

export {
  urls,
   baseURL
}