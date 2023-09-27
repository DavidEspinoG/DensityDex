import { ReactElement } from "react";

const PokemonCard = ({name, url} : {name: string, url: string}) : ReactElement => {
  return (
    <div className="pokemon-card">
      <p>{name}</p>
    </div>
  )
};

export default PokemonCard; 