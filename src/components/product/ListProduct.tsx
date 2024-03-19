import React from "react";
import ProductCard from "./ProductCard";
import { Empty } from "antd";

const ListProduct = ({ products }: any) => {
  return (
    <div className="flex flex-wrap justify-around">
      {products &&
        products.length > 0 &&
        products.map((product: any, index: number) => (
          <ProductCard
            key={index}
            product={product}
            className="my-4 lg:w-[18rem]"
          />
        ))}
      {products && products.length === 0 && (
        <Empty
          description={
            <h1 className="text-medium font-medium">Không có sản phẩm hợp lệ vui lòng tìm kiếm lại</h1>
          }
        />
      )}
    </div>
  );
};

export default ListProduct;
