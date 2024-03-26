import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import icons from "../../utils/Icons";
import { Link } from "react-router-dom";
import { FormatMoney } from "../../helpers/FormatCurrency";
import {
  calculateDiscountPrice,
  checkAvailableDiscount,
} from "../../helpers/CaculateDiscountPrice";

const ProductCard = ({ product, className }: any) => {
  checkAvailableDiscount(product.Discount);
  return (
    <Link to={`/products/${product?.id}`}>
      <Card
        key={product?.id}
        shadow="sm"
        isPressable
        className={`h-[24rem] min-w-[14rem] w-[14rem] mx-2 my-2 ${className}`}
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 group">
          <Image
            radius="lg"
            width="100%"
            isZoomed
            className="w-full object-cover h-[17rem] p-1"
            src={product?.mainImage}
          />
          <Chip
            key={product?.index}
            color="primary"
            className="absolute z-10 shadow-sm right-2 top-2 group-hover:none"
          >
            {product?.Discount?.percent}%
          </Chip>
        </CardBody>
        <CardFooter className="text-small justify-between ">
          <div className="w-full overflow-hidden">
            <p className="text-medium text-wrap truncate font-semibold">
              {product.name}
            </p>
            <div className="my-1">
              {product?.images &&
                product?.images?.length > 0 &&
                product.images?.map((image: any, index: number) => (
                  <Chip
                    key={index}
                    color="primary"
                    className="bg-slate-600 mx-1 hover:bg-opacity-70"
                  >
                    {image?.color}
                  </Chip>
                ))}
            </div>

            {checkAvailableDiscount(product.Discount) ? (
              <p className=" text-red-600">
                {FormatMoney(
                  calculateDiscountPrice(
                    product?.price,
                    product?.Discount?.percent
                  )
                )}
                <span className="line-through ml-4 text-default-500">
                  {FormatMoney(product?.price)}
                </span>
              </p>
            ) : (
              <span className="line-through ml-4 text-default-500">
                {product?.price}
              </span>
            )}

            <div className="w-full flex justify-end">
              <icons.FaPlus
                size={24}
                className="text-end hover:text-blue-500 mb-1 transition-all "
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
