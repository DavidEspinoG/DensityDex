import { ReactElement } from "react";
import { useAppDispatch } from "../state/hooks";
import { fetchPokemonImage } from "../state/pokemonSlice";
const PokemonCard = ({name, url} : {name: string, url: string}) : ReactElement => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchPokemonImage({ url }))
  };
  return (
    <div className="pokemon-card" onClick={handleClick}>
      <p >{name}</p>
    </div>
  )
};

export default PokemonCard; 