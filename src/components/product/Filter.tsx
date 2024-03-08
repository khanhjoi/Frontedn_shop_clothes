import { Input } from "@nextui-org/react";
import React from "react";

const Filter = () => {
  return (
    <div>
      <h2 className="my-4 text-medium font-semibold">LỌC SẢN PHẨM</h2>
      <div>
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Filter;
