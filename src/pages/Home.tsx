import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks";
import { fetchPokemons } from "../state/pokemonSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [])
  return(
    <>
      <h1>Home</h1>
    </>
  )
};

export default Home;