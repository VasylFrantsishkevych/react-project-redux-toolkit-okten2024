import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { typeService } from "../../services";

const getTypes = createAsyncThunk (
   'typeSlice/getTypes',
   async (_, thunkAPI) => {
       try {
            const types = await typeService.getAll();
            return thunkAPI.fulfillWithValue(types);
       } catch (e) {
           let error = e as AxiosError;
           return thunkAPI.rejectWithValue(error?.response?.data);
       }
   }
)

 export {
    getTypes,
 }