import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import BreadcrumbsHook from "../components/common/BreadcrumbsHook";
import SlideProduct from "../components/productDetail/SlideProduct";
import ProductDetail from "../components/productDetail/ProductDetail";
import { getProduct } from "../apis/Products";
import { ProductDetailType } from "../types/TProductDetail";
import { useAppDispatch, useAppSelector } from "../hooks/useSeleceter";
import { setActiveColor, setColors, setSizes } from "../store/slice/product";

const ProductDetailPage = () => {
  let { id } = useParams();
  const value = ["Trang chủ", "Sảm phẩm", "Chi tiết sản phẩm"];

  const dispatch = useAppDispatch();

  const changFlag = useAppSelector((state) => state.product.newChange);

  const [product, setProduct] = useState<ProductDetailType>();
  useEffect(() => {
    try {
      if (typeof id === "string") {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          getProduct(parsedId).then((data: any) => {
            setProduct(data);
            dispatch(setColors(getColors(data.options)));
            dispatch(setSizes(getSizes(data.options)));
            dispatch(setActiveColor(getColors(data.options)[0]));
          });
        } else {
          console.error("Invalid id:", id);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [changFlag]);

  const getSizes = (options: any) => {
    const holderIndex = new Set();
    const sizes: any = [];
    options.forEach((option: any) => {
      if (!holderIndex.has(option.Size.id)) {
        holderIndex.add(option.Size.id);
        sizes.push(option.Size);
      }
    });
    return sizes;
  };

  const getColors = (options: any) => {
    const holderIndex = new Set();
    const colors: any = [];
    options.forEach((option: any) => {
      if (!holderIndex.has(option.Color.id)) {
        holderIndex.add(option.Color.id);
        colors.push({
          color: option.Color,
          images: option.images,
        });
      }
    });
    return colors;
  };

  return (
    <>
      <Header />
      <div className="px-container">
        <BreadcrumbsHook list={value} className="mt-4" />
        <div className="w-full lg:flex lg:justify-between my-10">
          {product && <SlideProduct />}
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
