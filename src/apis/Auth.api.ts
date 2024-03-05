import axiosClient from "../libs/axios-client";
import { SignRes } from "../types/TAuth";

const signIn = async (data: SignRes) => {
  try {
    const response = await axiosClient.post("/auth/local/signin", data);
    console.log(response.data);
    return response.data; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

export { signIn };
