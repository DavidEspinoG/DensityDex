import { ReactElement } from "react";
import '../styles/PokemonStats.css';
import { useAppSelector } from "../state/hooks";
import StatBar from "./StatBar";

const PokemonStats = () : ReactElement => {
  const pokemonDetail = useAppSelector((state) => state.detailedPokemon);
  return (
    <div className="stats-container">
      {pokemonDetail.base_experience && <StatBar name={'Experience'} amount={pokemonDetail?.base_experience} />}
      {pokemonDetail.base_experience && <StatBar name={'Height'} amount={pokemonDetail?.height} />}
      {pokemonDetail.stats.map((el) => <StatBar key={el.stat.name} name={el.stat.name} amount={el.base_stat} /> )}
    </div>
  )
};

export default PokemonStats;