import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryType, getProducts } from "../../apis/Products";

export type Product = {
  id: number;
  name: string;
  mailImage: string;
  price: number;
};

export type ProductStore = {
  products: Product[];
  filter: Filter;
  pagination: Pagination;
};

export type Filter = {
  gte: number;
  lte: number;
  category: number;
};

export type PriceType = {
  gte: number;
  lte: number;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
};

const initialState: ProductStore = {
  products: [],
  filter: {
    gte: 0,
    lte: 9000000,
    category: 0,
  },
  pagination: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const getProduct = createAsyncThunk(
  "products/getProducts",
  async (searchParams: QueryType) => {
    try {
      const reponse = await getProducts(searchParams);
      console.log(reponse);
      return reponse;
    } catch (error) {
      return error;
    }
  }
);

const productsSlice = createSlice({
  name: "products ",
  initialState,
  reducers: {
    setInfo: (state, action) => {},
    setPrice: (state, action) => {
      state.filter.gte = action.payload[0];
      state.filter.lte = action.payload[1];
    },
    setCategory: (state, action) => {
      state.filter.category = action.payload;
    },
    setSize: (state, action) => {
      // state.filter. = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get profile
    builder.addCase(getProduct.fulfilled, (state, action: any) => {
      // Update the state with the fetched user data
      state.products = action.payload.data;
      state.pagination.totalPages = action.payload.meta.lastPage;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      // Handle the case when fetching user data fails
      console.error("Error fetching user data:", action.payload);
    });
  },
});

const { actions, reducer } = productsSlice;
export const { setInfo, setPrice, setCategory, setSize, setPagination } =
  actions;
export default reducer;
