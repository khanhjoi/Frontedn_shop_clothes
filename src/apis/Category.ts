import axiosClient from "../libs/axios-client";

export const getCategories = async () => {
  try {
    const reponse = await axiosClient.get("/category");
    return reponse;
  } catch (error) {
    console.log(error);
  }
};
