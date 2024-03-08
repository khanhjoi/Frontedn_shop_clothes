import axiosClient from "../libs/axios-client";
import { SignRes } from "../types/TAuth";

const signIn = async (data: SignRes) => {
  try {
    const response = await axiosClient.post("/auth/local/signin", data);
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

const refreshToken = async () => {
  try {
    const response = await axiosClient.post("/auth/refresh");
    return response.data
  } catch (error) {
    throw error;
  }
};

export { signIn , refreshToken};
