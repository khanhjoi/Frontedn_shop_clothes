
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
  info: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get profile

  },
});

const { actions, reducer } = userSlice;
export const { setInfo } = actions;
export default reducer;
