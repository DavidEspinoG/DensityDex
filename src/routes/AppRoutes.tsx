import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import { ReactElement } from "react";

const AppRoutes = () : ReactElement | null => {
  const routes = useRoutes([
    {path: '/', element: <Home />}, 
    {path: '/pokemon-detail', element: <PokemonDetail />}, 
  ])
  return routes;
};

export default AppRoutes;