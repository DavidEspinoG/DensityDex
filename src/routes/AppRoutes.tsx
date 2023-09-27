import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import UserData from "../pages/UserData";
const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />}, 
    {path: '/user-data/:userId', element: <UserData />,
      children: [
        {path: 'child', element: <p>children</p>}
      ]
    }, 
    {path: '/*', element: <p>Not found</p>}, 

  ])
  return routes;
};

export default AppRoutes;