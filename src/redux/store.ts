import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import { abilitySlice, pokemonSlice, typeSlice } from "./slices";


export const store = configureStore({
    reducer: {
      abilitySlice: abilitySlice.reducer,
      pokemonSlice: pokemonSlice.reducer,
      typeSlice: typeSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();