import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import SlideProduct from "../components/productDetail/SlideProduct";
import ProductDetail from "../components/productDetail/ProductDetail";
import { getProduct } from "../apis/Products";
import { Product } from "../store/slice/products";
import { ProductDetailType } from "../types/TProductDetail";

const ProductDetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<ProductDetailType>();
  const value = ["Trang chủ", "Sảm phẩm", "Chi tiết sản phẩm"];

  useEffect(() => {
    try {
      if (typeof id === "string") {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          getProduct(parsedId).then((data: any) => {
            setProduct(data);
          });
        } else {
          console.error("Invalid id:", id);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  console.log("Product Detail");

  return (
    <>
      <Header />
      <div className="px-container">
        <BreadcrumbsHook list={value} className="mt-4" />
        <div className="w-full lg:flex lg:justify-between my-10">
          {product && <SlideProduct images={product.images} />}
          {product && (
            <ProductDetail
              product={product}
              className="w-full lg:w-3/5 lg:ml-4"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
