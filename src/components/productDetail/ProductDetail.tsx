import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Button, Input } from "@nextui-org/react";
import icons from "../../utils/Icons";

const ProductDetail = ({ className }: any) => {
  const [numberProduct, setNumberProduct] = React.useState("1");

  return (
    <div className={` ${className}`}>
      <h1 className="text-3xl font-bold">Tên sản phẩm</h1>
      <div className="w-full mt-8">
        <RatingHook isRating={false} ratingProps={3} />
      </div>
      <div className="w-full mt-4">
        <div className="text-2xl font-bold">
          10.4444đ
          <span className="text-slate-400 line-through ml-4">13.4444đ</span>
          <span className=" text-red-600 text-xl">-30%</span>
        </div>
      </div>
      <div className="w-full mt-4 font-medium">
        <h1>Kích thước: (size sm)</h1>
        <div className="flex w-3/5 mt-2">
          <Button radius="full" color="primary" className="font-medium mx-2">
            X
          </Button>
          <Button radius="full" className="font-medium mx-2">
            XL
          </Button>
          <Button radius="full" className="font-medium mx-2">
            M
          </Button>
        </div>
        <p className="text-small mt-4 text-blue-600">Miễn phí giao hàng</p>
      </div>
      <div className="w-full mt-4">
        <div className="w-4/6 flex">
          <div>
            <Input
              type="number"
              label="Số lượng sản phẩm:"
              placeholder="0.00"
              labelPlacement="outside"
              value={numberProduct}
              onValueChange={setNumberProduct}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
