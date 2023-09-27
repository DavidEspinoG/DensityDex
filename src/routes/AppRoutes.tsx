import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import { ReactElement } from "react";

const AppRoutes = () : ReactElement | null => {
  const routes = useRoutes([
    {path: '/', element: <Home />}, 
    {path: '/pokemonDetailed', element: <Home />}, 
  ])
  return routes;
};

export default AppRoutes;