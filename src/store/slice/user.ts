import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../../apis/User.api";

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl?: string;
};

export type UserStore = {
  user: User;
  cart: any;
}

const initialState: UserStore = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    avatarUrl: '',
  },
  cart: []
};

export const getUserProfile = createAsyncThunk(
  "user/getProfile",
  async () => {
    try {
      const reponse = await getProfile();
      return reponse;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action) => {},
  },
  extraReducers: (builder) => {
    // get profile
    builder.addCase(getUserProfile.fulfilled, (state, action :any) => {
      // Update the state with the fetched user data
      state.user.email = action?.payload?.email;
      state.user.firstName = action?.payload?.firstName;
      state.user.lastName = action?.payload?.lastName;
      state.user.phone  = action?.payload?.phone;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      // Handle the case when fetching user data fails
      console.error("Error fetching user data:", action.payload);
    });
  },
});

const { actions, reducer } = userSlice;
export const { setInfo } = actions;
export default reducer;
