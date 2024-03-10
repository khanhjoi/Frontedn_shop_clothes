import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import icons from "../../utils/Icons";
import ProductInfo from "./ProductInfo";
import ProductComment from "./ProductComment";

const ProductDetail = ({ className }: any) => {
  const [numberProduct, setNumberProduct] = React.useState("1");

  const handleNumberChange = (newValue: string) => {
    // Convert newValue to a number
    const parsedValue = parseFloat(newValue);
    // Check if newValue is a valid number and greater than 0
    if (!isNaN(parsedValue) && parsedValue > 0) {
      // Update the state only if the value is valid
      setNumberProduct(newValue);
    }
  };

  return (
    <div className={` ${className}`}>
      <h1 className="text-3xl font-bold mb-4">Tên sản phẩm</h1>
      <Tabs aria-label="Options ">
        <Tab key="ProductInfo" title="Thông tin sản phẩm" className="">
          <ProductInfo />
        </Tab>
        <Tab key="ProductRating" title="Đánh giá sản phẩm">
        <ProductComment />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDetail;
