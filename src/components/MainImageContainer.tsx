import { ReactElement } from "react";
import { useAppSelector } from "../state/hooks";

const MainImageContainer = () : ReactElement => {
  const selectedPokemon = useAppSelector((state) => state.selectedPokemon);
  const imageUrl = useAppSelector((state) => state.imageUrl);
  return (
    <div className="image-container">
      {imageUrl && <img src={imageUrl} className="pokemon-image" alt={selectedPokemon}/>}
      <span className="current-pokemon-name">{selectedPokemon}</span>
    </div>
  )
};

export default MainImageContainer;