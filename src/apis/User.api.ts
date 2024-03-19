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

const updateProfile = async (data: any) => {
  try {
    const response = await axiosClient.put("/users/profile", data);
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

const getAddresses = async () => {
  try {
    const response = await axiosClient.get("/users/addresses");
    return response;
  } catch (error) {
    throw error; // Rethrow
  }
};

const addNewAddress = async (address: string) => {
  try {
    const response = await axiosClient.post("/users/address", {
      nameAddress: address,
    });
    return response;
  } catch (error) {
    throw error; // Rethrow
  }
};

const deleteAddress = async (id: number) => {
  try {
    const response = await axiosClient.delete(`/users/address/${id}`);
    return response;
  } catch (error) {
    throw error; // Rethrow
  }
};

const getOrders = async () => {
  try {
    const response = await axiosClient.get(`/user/orders`);
    return response;
  } catch (error) {
    throw error; // Rethrow
  }
};

const createOrder = async (data: any) => {
  try {
    const response = await axiosClient.post("/user/order", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getProfile,
  updateProductInCart,
  getCart,
  commentProduct,
  getAddresses,
  addNewAddress,
  createOrder,
  deleteAddress,
  updateProfile,
  getOrders
};
