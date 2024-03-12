import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryType, getProducts } from "../../apis/Products";

export type ProductStore = {
  slide: Slide;
  number: number;
};

export type Slide = {
  color: string;
  images: any[];
  activeIndex: number;
};

const initialState: ProductStore = {
  slide: {
    color: "",
    activeIndex: 0,
    images: [],
  },
  number: 0,
};

const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveSlide: (state, action) => {
      console.log(action.payload)
      state.slide.activeIndex = action.payload.index;
      state.slide.color = action.payload.color;
      state.slide.images = action.payload.images;
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
export const { setActiveSlide } = actions;
export default reducer;
