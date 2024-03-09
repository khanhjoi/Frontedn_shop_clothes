import React from "react";
import ProductCard from "./ProductCard";

const ListProduct = ({ products }: any) => {
  console.log("listProduct");
  return (
    <div className="flex flex-wrap justify-around">
      {products && products.length > 0 && products.map((product:any, index:number) => (
        <ProductCard key={index} product={product} className="my-4 lg:w-[18rem]"/>
      ))}
    </div>
  );
};

export default ListProduct;
