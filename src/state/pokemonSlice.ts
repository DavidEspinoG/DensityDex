import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { apiUrls } from "../constants";
import { DetailedPokemon, PokemonsState } from "../types/PokemonTypes";


const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons', async({url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'} : {url? : string}) => {
    const res = await axios.get(url);
    return res.data;
  }
);

const fetchPokemonImage = createAsyncThunk(
  'pokemons/getImage', async ({url} : {url: string}) => {
    const res = await axios.get(url);
    return res.data; 
  } 
);

const fetchPokemonDetail = createAsyncThunk(
  'pokemons/getDetail', async ({url} : {url: string}) => {
    const res = await axios.get(url);
    return res.data as DetailedPokemon; 
  } 
);


const initialState: PokemonsState = {
  currentPokemons: [],
  detailedPokemon: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0, 
    held_items: [],
    id: 0, 
    is_default: false, 
    location_area_encounters: '', 
    moves: [],
    name: '', 
    order: 0, 
    past_types: [],
    species: {},
    sprites: {},
    stats: [],
  },
  loading: false, 
  imageUrl: null, 
  prevPage: '', 
  nextPage: '',
  selectedPokemon: '',
};

const pokemonsSlice = createSlice({
  name: 'pokemons', 
  initialState, 
  reducers: {
    addSelectedPokemon(state, action : PayloadAction<string>){
      state.selectedPokemon = action.payload;
    }
  }, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false; 
      if(action.payload.results[0].name !== 'kabutops'){
        state.currentPokemons = action.payload.results;
        state.nextPage = action.payload.next;
      } else {
        state.currentPokemons = action.payload.results.slice(0, 11);
        state.nextPage = null;
      }
      state.prevPage = action.payload.previous;
    })
    .addCase(fetchPokemonImage.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPokemonImage.fulfilled, (state, action) => {
      state.loading = false; 
      state.imageUrl = action.payload.sprites.front_default;
    })
    .addCase(fetchPokemonDetail.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
      state.loading = false; 
      state.detailedPokemon = action.payload;
    })
  }
});

export default pokemonsSlice.reducer;
export {fetchPokemons, fetchPokemonImage, fetchPokemonDetail};
export const { addSelectedPokemon } = pokemonsSlice.actions;