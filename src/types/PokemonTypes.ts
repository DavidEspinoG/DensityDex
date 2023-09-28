export type Pokemon = {
  name: string, 
  url: string,
}

export interface DetailedPokemon {
  abilities: any[],
  base_experience: number,
  forms: any[],
  game_indices: any[],
  height: number, 
  held_items: any[],
  id: number, 
  is_default: boolean, 
  location_area_encounters: string, 
  moves: any[],
  name: string, 
  order: number, 
  past_types: any[],
  species: {},
  sprites: {},
  stats: PokemonStat[],
}

export interface PokemonsState {
  currentPokemons: any, 
  loading: boolean,
  imageUrl: string | null, 
  detailedPokemon: DetailedPokemon,
  prevPage: string | null,
  nextPage: string | null,
  selectedPokemon: string,  
}


interface PokemonStat {
  base_stat: number, 
  effort: number, 
  stat: {name: string, url: string},
}

