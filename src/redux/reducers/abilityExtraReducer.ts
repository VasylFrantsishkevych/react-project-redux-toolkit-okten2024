import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { abilityService } from "../../services";


const getAbilities = createAsyncThunk (
   'abilitySlice/getAbilities',
   async (_, thunkAPI) => {
       try {
            const ability = await abilityService.getAll();
            return thunkAPI.fulfillWithValue(ability);
       } catch (e) {
           let error = e as AxiosError;
           return thunkAPI.rejectWithValue(error?.response?.data);
       }
   }
)

 export {
   getAbilities,
 }