import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import Filter from "../components/product/filterCpn/Filter";
import ListProduct from "../components/product/ListProduct";
import PaginationHook from "../components/product/PaginationHook";
import { useEffect } from "react";

const ProductsPage = () => {
  const value = ["Trang chủ", "Sảm phẩm"];

  const products: any = [
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.AT022.7_48.jpg",
      type: "new",
      name: "áo thể thao 1",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.TT009.15_39.jpg",
      type: "new",
      name: "áo thể thao 2",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.AT022.7_48.jpg",
      type: "new",
      name: "áo thể thao 1",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.TT009.15_39.jpg",
      type: "new",
      name: "áo thể thao 2",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.AT022.7_48.jpg",
      type: "new",
      name: "áo thể thao 1",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.TT009.15_39.jpg",
      type: "new",
      name: "áo thể thao 2",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
  ];

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
