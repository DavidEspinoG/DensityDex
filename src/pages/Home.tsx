import { useEffect } from "react";
import { useAppDispatch } from "../state/hooks";
import { fetchPokemons } from "../state/pokemonSlice";
import { useAppSelector } from "../state/hooks";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/Pokemon";

const Home = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.currentPokemons);
  const selectedPokemon = useAppSelector((state) => state.selectedPokemon);
  const imageUrl = useAppSelector((state) => state.imageUrl);
  const previousPage = useAppSelector((state) => state.prevPage);
  const nextPage = useAppSelector((state) => state.nextPage);
  useEffect(() => {
    dispatch(fetchPokemons({}));
  }, [])
  return(
    <>
      <h1>Pokemons</h1>
      <div className="image-container">
        {imageUrl && <img src={imageUrl} className="pokemon-image"/>}
        <span className="current-pokemon-name">{selectedPokemon}</span>
      </div>
      <div className="cards-container">
        {pokemons.map((pokemon : Pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} /> )}
      </div>
      <div className="buttons-container">
        <button
          disabled={!previousPage}
          className="button"
          onClick={() => {
            if(previousPage){
              dispatch(fetchPokemons({url: previousPage}))
            }
          }}
          >
          Previous Page
        </button>
        <button
          disabled={!nextPage}
          className="button"
          onClick={() => {
            if(nextPage){
              dispatch(fetchPokemons({url: nextPage}))
            }
          }}
        >
          Next Page
        </button>
      </div>
      
    </>
  )
};

export default Home;