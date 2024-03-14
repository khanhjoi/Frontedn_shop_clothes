import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryType, getProducts } from "../../apis/Products";

export type ProductStore = {
  colorActive: Color;
  colors: Color[];
  sizes: any[];
  number: number;
};

export type Color = {
  id: number;
  color: string;
  codeColor: string;
  images: Image[];
};

export type Image = {
  id: number;
  filePath: string;
  captions: string;
};

const initialState: ProductStore = {
  colorActive: {
    id: -1,
    color: "",
    codeColor: "",
    images: [],
  },
  colors: [],
  sizes: [],
  number: 0,
};

const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveColor: (state, action) => {
      state.colorActive.id = action.payload.color.id;
      state.colorActive.color = action.payload.color.color
      state.colorActive.codeColor = action.payload.color.codeColor
      state.colorActive.images = action.payload.images
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get profile
    // builder.addCase(getProduct.fulfilled, (state, action: any) => {
    //   // Update the state with the fetched user data
    //   state.products = action.payload.data;
    //   state.pagination.totalPages = action.payload.meta.lastPage;
    // });
    // builder.addCase(getProduct.rejected, (state, action) => {
    //   // Handle the case when fetching user data fails
    //   console.error("Error fetching user data:", action.payload);
    // });
  },
});

const { actions, reducer } = productSlice;
export const { setActiveColor, setSizes, setColors } = actions;
export default reducer;
