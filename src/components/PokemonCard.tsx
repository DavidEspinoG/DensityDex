import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { fetchPokemonImage, addSelectedPokemon } from "../state/pokemonSlice";
const PokemonCard = ({name, url} : {name: string, url: string}) : ReactElement => {
  const dispatch = useAppDispatch();
  const selectedPokemon = useAppSelector((state) => state.selectedPokemon);
  const handleClick = () => {
    dispatch(fetchPokemonImage({ url }));
    dispatch(addSelectedPokemon(name))
  };
  const className = selectedPokemon === name ? "pokemon-card selected" : "pokemon-card";
  return (
    <div className={className} onClick={handleClick}>
      <p className="pokemon-card-name" >{name}</p>
    </div>
  )
};

export default PokemonCard; 