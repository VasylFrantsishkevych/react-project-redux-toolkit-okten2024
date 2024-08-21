import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PokemonsPage from "../pages/pokemonsPage/PokemonsPage";

export const routers = createBrowserRouter([
  {
    path: "/", element: <MainLayout/>, children : [
      { index: true, element: <PokemonsPage /> },
      { path: "pokemons", element: <PokemonsPage /> },
    ], 
  },
]);