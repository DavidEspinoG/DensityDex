import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks";
import { fetchPokemons } from "../state/pokemonSlice";
import { useAppSelector } from "../state/hooks";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/Pokemon";

const Home = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.currentPokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [])
  return(
    <>
      <h1>Pokemons</h1>
      {pokemons.map((pokemon : Pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}
    </>
  )
};

export default Home;