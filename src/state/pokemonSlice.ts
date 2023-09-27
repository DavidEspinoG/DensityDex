import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrls } from "../constants";
const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons', async() => {
    const res = await axios.get(apiUrls.getPokemons);
    return res.data;
  }
)

interface PokemonsState {
  currentPokemons: any, 
  loading: boolean,
  imageUrl: string | null, 
  detailedPokemon: object,
}

const initialState: PokemonsState = {
  currentPokemons: [],
  detailedPokemon: {},
  loading: false, 
  imageUrl: null
};

const pokemonsSlice = createSlice({
  name: 'pokemons', 
  initialState, 
  reducers: {}, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPokemons.fulfilled, (state, action : PayloadAction) => {
      state.loading = false; 
      state.currentPokemons = action.payload;
    })
  }
});

export default pokemonsSlice.reducer;
export {fetchPokemons};