import axiosClient from "../libs/axios-client";

export type QueryType = {
  page: number;
  where: string;
  orderBy: string;
};

const getProducts = async ( queryPrams:QueryType ) => {
  try {
    const response = await axiosClient.get(`/products/?page=${queryPrams && queryPrams?.page ? queryPrams.page : ''}&where=${queryPrams && queryPrams.where ? queryPrams.where : ''}&order=${ queryPrams && queryPrams.orderBy ? queryPrams.orderBy : ""}`);
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

export { getProducts };
