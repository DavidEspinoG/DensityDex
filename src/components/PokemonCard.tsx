import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { fetchPokemonImage, addSelectedPokemon } from "../state/pokemonSlice";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonDetail } from "../state/pokemonSlice";

const PokemonCard = ({name, url} : {name: string, url: string}) : ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedPokemon = useAppSelector((state) => state.selectedPokemon);
  const handleClick = (e : MouseEvent<HTMLElement>) => {
    dispatch(fetchPokemonImage({ url }));
    dispatch(addSelectedPokemon(name));
    if(e.detail == 2){
      dispatch(fetchPokemonDetail({url}))
      navigate('/pokemon-detail')
    }
  };
  const className = selectedPokemon === name ? "pokemon-card selected" : "pokemon-card";
  return (
    <div className={className} onClick={handleClick}>
      <p className="pokemon-card-name" >{name}</p>
    </div>
  )
};

export default PokemonCard; 