import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

const store = configureStore({
  reducer: pokemonSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;