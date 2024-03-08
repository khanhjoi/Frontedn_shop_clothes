import axiosClient from "../libs/axios-client";


const getProfile = async () => {
  try {
    const response = await axiosClient.get("/users/profile");
    return response; // Return data if needed
  } catch (error) {
    throw error; // Rethrow error or handle it accordingly
  }
};

export { getProfile };
