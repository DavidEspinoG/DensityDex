import { ReactElement } from "react";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { fetchPokemons } from "../state/pokemonSlice";

const ButtonsContainer = () : ReactElement => {
  const dispatch = useAppDispatch();
  const previousPage = useAppSelector((state) => state.prevPage);
  const nextPage = useAppSelector((state) => state.nextPage);
  return (
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
  )
};

export default ButtonsContainer;