import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import SlideProduct from "../components/productDetail/SlideProduct";
import ProductDetail from "../components/productDetail/ProductDetail";


const ProductDetailPage = () => {
  let { id } = useParams();

  const value = ["Trang chủ", "Sảm phẩm"];
  
  return (
    <>
      <Header />
      <div className="px-container">
        <BreadcrumbsHook list={value}/>
        <div className="w-full lg:flex lg:justify-between my-10">
          <SlideProduct className="lg:w-2/5"/>
          <ProductDetail className="w-full lg:w-3/5 lg:ml-4"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
