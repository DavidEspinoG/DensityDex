import { ReactElement } from "react";
import MainImageContainer from "../components/MainImageContainer";
import PokemonStats from "../components/PokemonStats";

const PokemonDetail = () : ReactElement  => {
  return (
    <>
      <h1>Pokemon Detail</h1>
      <MainImageContainer />
      <PokemonStats />
    </>
  )
};

export default PokemonDetail;