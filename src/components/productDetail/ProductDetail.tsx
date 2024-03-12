import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import icons from "../../utils/Icons";
import ProductInfo from "./ProductInfo";
import ProductComment from "./ProductComment";
import { ProductDetailType } from "../../types/TProductDetail";

interface ProductDetailProps {
  product: ProductDetailType;
  className: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  className,
}: any) => {
  
  const [numberProduct, setNumberProduct] = React.useState("1");

  return (
    <div className={` ${className}`}>
      <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
      <Tabs aria-label="Options ">
        <Tab key="ProductInfo" title="Thông tin sản phẩm" className="">
          <ProductInfo product={product} />
        </Tab>
        <Tab key="ProductRating" title="Đánh giá sản phẩm">
          <ProductComment ratings={product.rating}/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDetail;
