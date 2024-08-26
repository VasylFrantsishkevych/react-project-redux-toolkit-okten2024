import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PokemonsPage from "../pages/pokemonsPage/PokemonsPage";
import PokemonDetailsPage from "../pages/pokemonDetailsPage/PokemonDetailsPage";
import SearchPage from "../pages/searchPage/SearchPage";
import PokemonFormPage from "../pages/pokemonFormsPage/PokemonFormPage";
import FavoritePokemonsPage from "../pages/favoritePokemonsPage/FavoritePokemonsPage";

export const routers = createBrowserRouter([
  {
    path: "/", element: <MainLayout/>, children : [
      { index: true, element: <PokemonsPage /> },
      { path: "pokemons", element: <PokemonsPage /> },
      { path: "pokemons/:name", element: <PokemonDetailsPage /> },
      { path: "pokemons/type/:typeName", element: <PokemonsPage /> },
      { path: "pokemons/ability/:abilityName", element: <PokemonsPage /> },
      { path: "pokemons/search", element: <SearchPage /> },
      { path: "pokemons/forms/:formName", element: <PokemonFormPage /> },
      { path: "favorites", element: <FavoritePokemonsPage/>},
    ], 
  },
]);