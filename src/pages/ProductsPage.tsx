import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import Filter from "../components/product/filterCpn/Filter";
import ListProduct from "../components/product/ListProduct";
import PaginationHook from "../components/product/PaginationHook";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useSeleceter";
import { getProduct } from "../store/slice/products";
import { useSearchParams } from "react-router-dom";
import { QueryType } from "../apis/Products";

const ProductsPage = () => {
  const value = ["Trang chủ", "Sảm phẩm"];
  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useAppSelector(
    (state) => state.products.pagination.currentPage
  );
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    const searchParams: QueryType = {
      page: currentPage,
      where: "",
      orderBy: "",
    };

    dispatch(getProduct(searchParams));
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="w-full px-container my-10">
        <BreadcrumbsHook list={value} />
        <div className="flex w-full mt-10 justify-between h-[3rem]">
          <h1 className="font-bold text-2xl">TẤT CẢ SẢN PHẨM</h1>
        </div>
        <div className="lg:flex h-auto">
          <div className=" lg:w-1/4 lg:mr-4">
            <Filter />
          </div>
          <div className="my-10 lg:w-5/6 lg:ml-4 lg:my-0">
            <ListProduct products={products} />
            <PaginationHook />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
