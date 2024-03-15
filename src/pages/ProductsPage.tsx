import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BreadcrumbsHook, {
  BreadcrumbType,
} from "../components/common/BreadcrumbsHook";
import Filter from "../components/product/filterCpn/Filter";
import ListProduct from "../components/product/ListProduct";
import PaginationHook from "../components/product/PaginationHook";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useSeleceter";
import { getProduct } from "../store/slice/products";
import { useSearchParams } from "react-router-dom";
import { QueryType } from "../apis/Products";
import path from "../utils/path";

const ProductsPage = () => {
  const breacdCrumValue: BreadcrumbType[] = [
    {
      title: "Trang chủ",
      link: path.HOME,
    },
    {
      title: "Sảm phẩm",
      link: path.PRODUCTS,
    },
  ];
  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useAppSelector(
    (state) => state.products.pagination.currentPage
  );
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const category = useAppSelector((state) => state.products.filter.category);
  const gte = useAppSelector((state) => state.products.filter.gte);
  const lte = useAppSelector((state) => state.products.filter.lte);

  useEffect(() => {
    let whereQuery: any = {
      price: {
        gte: gte,
        lte: lte,
      },
    };

    if (category !== 0) {
      whereQuery.categoryId = category;
    }
    const searchParams: QueryType = {
      page: currentPage,
      where: JSON.stringify(whereQuery),
      orderBy: "",
    };

    dispatch(getProduct(searchParams));
  }, [currentPage, gte, lte, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="w-full px-container my-10">
        <BreadcrumbsHook list={breacdCrumValue} />
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
