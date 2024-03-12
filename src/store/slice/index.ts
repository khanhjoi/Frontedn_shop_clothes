import userReducer from "./user";


import productReducer from "./products";
import productDetailReducer from "./product";

export default {
  user: userReducer,
  products: productReducer,
  product: productDetailReducer
};
