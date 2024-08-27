import { createSlice } from "@reduxjs/toolkit";

import { IPokemonResponse } from "../../models";
import { getTypes } from "../reducers";

interface typeSliceType  {
   responseType: IPokemonResponse,
   isLoaded: boolean,
   error: string,
}

const typeInitState: typeSliceType = {
   responseType: {
      count: 0,
      next: null,
      previous: null,
      results: []
   },
   isLoaded: false,
   error: '',
}

export const typeSlice = createSlice({
   name: 'typeSlice',
   initialState: typeInitState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getTypes.fulfilled, (state, action) => {
            state.responseType = action.payload
            state.isLoaded = true
         })
   }
})

export const typeActions = {
   ...typeSlice.actions,
   getTypes,
}