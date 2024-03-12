import { createBrowserRouter } from "react-router-dom";
import { Home, Products, SignIn, SignUp } from "../pages/";
import { RouterProvider } from "../libs/router-provider";
import path from "../utils/path";
import ProductDetailPage from "../pages/ProductDetailPage";
import UserDetailPage from "../pages/UserDetailPage";

const router = createBrowserRouter([
  {
    path: path.HOME ,
    element: <Home />,
  },
  {
    path: path.HOME2 ,
    element: <Home />,
  },
  {
    path: path.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: path.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: path.PRODUCTS,
    element: <Products />,
  },
  {
    path: path.PRODUCT_DETAIL,
    element: <ProductDetailPage />,
  },
  {
    path: path.USER_DETAIL,
    element: <UserDetailPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
