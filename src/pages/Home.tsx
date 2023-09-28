import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks";
import { fetchPokemons } from "../state/pokemonSlice";
import MainImageContainer from "../components/MainImageContainer";
import CardsContainer from "../components/CardsContainer";
import ButtonsContainer from "../components/ButtonsContainer";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemons({}));
  }, [])
  return(
    <>
      <h1>DensityDex</h1>
      <MainImageContainer />
      <CardsContainer />
      <ButtonsContainer />
    </>
  )
};

export default Home;