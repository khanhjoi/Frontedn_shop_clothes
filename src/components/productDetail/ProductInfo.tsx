import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Button, Input } from "@nextui-org/react";
import icons from "../../utils/Icons";
import { ProductDetailType } from "../../types/TProductDetail";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import { setActiveColor, setColors } from "../../store/slice/product";
import { openNotification } from "../../helpers/showNotification";
import { updateProductInCart } from "../../apis/User.api";
import { updateProductReq } from "../../types/TCart";

interface ProductInfoProps {
  product: ProductDetailType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [numberProduct, setNumberProduct] = React.useState("1");
  const [activeNumber, setActiveNumber] = React.useState(-1);
  const [activeSize, setActiveSize] = React.useState<any>({});
  const colorStore = useAppSelector((state) => state.product.colorActive);
  const colors = useAppSelector((state) => state.product.colors);
  const sizes = useAppSelector((state) => state.product.sizes);


  const handleNumberChange = (newValue: string) => {
    // Convert newValue to a number
    const parsedValue = parseFloat(newValue);
    // Check if newValue is a valid number and greater than 0
    if (!isNaN(parsedValue) && parsedValue > 0) {
      // Update the state only if the value is valid
      setNumberProduct(newValue);
    }
  };

  const handleSelectSize = (index: number) => {
    setActiveNumber(index);
    setActiveSize(sizes[index]); // Update state with the selected size object
  };

  const handleSelectColor = (item: any) => {
    dispatch(setActiveColor(item))
  };

  const handleOnClickAdd = async () => {
    if (Object.keys(activeSize).length === 0) {
      openNotification({
        message: "Cảnh báo",
        description: "Vui lòng chọn kích thước",
        type: "error",
      });
    } else {
      try {
        const data: updateProductReq = {
          size: activeSize.name,
          color: colorStore.color,
          productId: product?.id,
          quantity: parseInt(numberProduct),
        };
        const productAdd = await updateProductInCart(data);

        if (productAdd) {
          openNotification({
            message: "Thành công",
            description: "Đã thêm thành công",
            type: "success",
          });
        } else {
          openNotification({
            message: "Cảnh báo",
            description: "Có lỗi xảy ra",
            type: "error",
          });
        }
      } catch (error: any) {
        if (error?.response.status === 401) {
          openNotification({
            message: error?.response.status,
            description: "Chưa đăng nhập vui lòng đăng nhập",
            type: "error",
          });
        }
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="w-full mt-4">
        <RatingHook isRating={false} ratingProps={3} />
      </div>
      <div className="w-full mt-4">
        <div className="text-2xl font-bold">
          {product?.price}
          <span className="text-slate-400 line-through ml-4">13.4444đ</span>
          <span className=" text-red-600 text-xl">-30%</span>
        </div>
      </div>
      <div className="w-full mt-4 font-medium">
        <h1>Màu sắc: {colorStore.color}</h1>
        <div className="flex w-3/5 mt-2 items-center">
          {colors &&
            colors.length > 0 &&
            colors.map((item:any, index:number) => (
              <Button
                key={index}
                onClick={() => {
                  handleSelectColor(item);
                }}
                radius="full"
                variant={`${
                  colorStore.color === item.color.color ? "shadow" : "bordered"
                }`}
                size={`${colorStore.color === item.color.color ? "md" : "sm"}`}
                style={{ backgroundColor: `${item.color.codeColor}` }}
                className={`font-medium mx-2 transition-all duration-100 `}
              ></Button>
            ))}
        </div>
      </div>
      <div className="w-full mt-4 font-medium">
        <h1>Kích thước: {activeSize?.caption}</h1>
        <div className="flex w-3/5 mt-2">
          {sizes &&
            sizes.length > 0 &&
            sizes.map((size, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleSelectSize(index);
                }}
                radius="full"
                color={`${index === activeNumber ? "primary" : "default"}`}
                className="font-medium mx-2"
              >
                {size.name}
              </Button>
            ))}
        </div>
        <p className="text-small mt-4 text-blue-600">Miễn phí giao hàng</p>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6 flex items-center justify-around border-b-1 pb-6">
          <Input
            type="number"
            radius="full"
            variant="bordered"
            color="primary"
            label="Số lượng sản phẩm:"
            placeholder="1.00"
            labelPlacement="outside"
            value={numberProduct}
            className="w-1/3"
            onValueChange={(value) => {
              handleNumberChange(value);
            }}
          />
          <Button
            radius="full"
            color="primary"
            className="mt-6 w-2/4"
            startContent={<icons.CiShoppingCart />}
            onClick={handleOnClickAdd}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6 border-b-1 pb-6">
          <div className="text-blue-700 cursor-pointer flex items-center">
            <icons.SiZalo size={26} className="bg-slate-200 rounded-md p-1" />
            <a href="https://zalo.me/pc" className=" ml-2 font-medium">
              Chat để được tư vấn thêm. (8h30-20h00)
            </a>
          </div>
          <div className="mt-4 p-4 bg-slate-100 rounded-md">
            <h1 className="font-bold text-sm">
              Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ
            </h1>
            <p className="text-sm mt-2 flex items-center">
              <icons.IoTimerOutline size={24} className="mr-2 text-blue-600" />{" "}
              Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
            </p>
            <p className="text-sm mt-2 flex items-center">
              <icons.CiDeliveryTruck size={24} className="mr-2 text-blue-600" />
              Ở tỉnh thành khác nhận hàng từ 2-5 ngày
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6 border-b-1 pb-6">
          <div className="w-full flex justify-between">
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon3.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đổi trả cực dễ chỉ cần số điện thoại
              </p>
            </div>
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon5.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đổi hàng trong 60 ngày 60 ngày đổi trả vì bất kỳ lý do gì
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon2.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày
              </p>
            </div>
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon1.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đến tận nơi nhận hàng trả, hoàn tiền trong 24h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-sm font-medium">Các đặt điểm nỗi bặt</h1>
          <p className="p-4 bg-slate-100 rounded-md text-[0.8rem] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            perspiciatis tempore? Quaerat ullam molestiae id, repellat
            aspernatur veritatis tempora beatae nemo? Laboriosam similique
            sapiente eligendi nisi eaque amet, magni tenetur!
          </p>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-sm font-medium">Thông tin sản phẩm</h1>
          <p className="p-4 bg-slate-100 rounded-md text-[0.8rem] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            perspiciatis tempore? Quaerat ullam molestiae id, repellat
            aspernatur veritatis tempora beatae nemo? Laboriosam similique
            sapiente eligendi nisi eaque amet, magni tenetur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
