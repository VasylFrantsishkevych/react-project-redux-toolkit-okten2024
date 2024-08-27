import { createSlice } from "@reduxjs/toolkit"

import { IResults } from "../../models"
import { getAbilities } from "../reducers"

interface abilitySliceType  {
   abilities: IResults[]
   isLoaded: boolean,
   error: string,
}

const abilityInitState: abilitySliceType = {
   abilities: [],
   isLoaded: false,
   error: '',
}

export const abilitySlice = createSlice({
   name: 'abilitySlice',
   initialState: abilityInitState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAbilities.fulfilled, (state, {payload}) => {
            state.abilities = payload.results
            state.isLoaded = true
         })
   }
})

export const abilityActions = {
   ...abilitySlice.actions,
   getAbilities,
}