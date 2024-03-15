import axiosClient from "../libs/axios-client";
import { updateProductReq } from "../types/TCart";

const getProfile = async () => {
  try {
    const response = await axiosClient.get("/users/profile");
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

const getCart = async () => {
  try {
    const response = await axiosClient.get("/users/cart");
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

const updateProductInCart = async (data: updateProductReq) => {
  try {
    const response = await axiosClient.post("/users/cart", data);
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

const commentProduct = async (id: number, comment: any) => {
  try {
    const response = await axiosClient.post(`/products/${id}`, comment);
    return response;
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

export { getProfile, updateProductInCart, getCart, commentProduct };
