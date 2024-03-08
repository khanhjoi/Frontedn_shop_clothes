import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import { Select } from "antd";
import { Button, SelectItem } from "@nextui-org/react";
import Filter from "../components/product/Filter";

const ProductsPage = () => {
  const value = ["Home", "Products"];
  return (
    <>
      <Header />
      <div className="w-full px-container my-10">
        <BreadcrumbsHook list={value} />
        <div className="flex w-full mt-10 justify-between h-[3rem]">
          <h1 className="font-bold text-2xl">TẤT CẢ SẢN PHẨM</h1>
        </div>
        <div className="flex h-auto">
          <div className="w-2/6 h-40 mx-1">
            <Filter />
            
          </div>
          <div className="w-4/6">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
