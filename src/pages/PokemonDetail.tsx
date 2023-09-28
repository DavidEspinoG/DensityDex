import { ReactElement } from "react";
import MainImageContainer from "../components/MainImageContainer";
import PokemonStats from "../components/PokemonStats";
import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks";
import { getPokemonFromLocalStorage } from "../state/pokemonSlice";

const PokemonDetail = () : ReactElement  => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPokemonFromLocalStorage());
  }, [])
  return (
    <>
      <h1>Pokemon Detail</h1>
      <MainImageContainer />
      <PokemonStats />
    </>
  )
};

export default PokemonDetail;