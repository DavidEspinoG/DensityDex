import { ReactElement } from "react";
import { useAppSelector } from "../state/hooks";
import { Pokemon } from "../types/PokemonTypes";
import PokemonCard from "./PokemonCard";
import '../styles/CardsContainer.css';

const CardsContainer = () : ReactElement => {
  const pokemons = useAppSelector((state) => state.currentPokemons);
  return (
    <div className="cards-container">
      {pokemons.map((pokemon : Pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}
    </div>
  )
};  

export default CardsContainer;