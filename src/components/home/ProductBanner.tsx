import {
  CardBody,
  CardFooter,
  Card,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import icons from "../../utils/Icons";

const ProductBanner = ({ className, title, products }: any) => {
  console.log(products);
  return (
    <div className={`${className} relative max-w-screen overflow-auto`}>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="my-4 flex h-[28rem] overflow-auto">
        {products &&
          products.length > 0 &&
          products.map((product: any, index: number) => (
            <Card
              key={index}
              shadow="sm"
              isPressable
              className="h-[24rem] min-w-[14rem] mx-2 my-2"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 group">
                <Image
                  radius="lg"
                  width="100%"
                  isZoomed
                  className="w-full object-cover h-[17rem] p-1"
                  src={product.mainImage}
                />
                <Chip
                  key={index}
                  color="primary"
                  className="absolute z-10 shadow-sm right-2 top-2 group-hover:none"
                >
                  {product.type}
                </Chip>
              </CardBody>
              <CardFooter className="text-small justify-between ">
                <div className="w-full overflow-hidden">
                  <p className="text-medium text-wrap truncate font-semibold">
                    Áo Thun Thể thao
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
                          {image.color}
                        </Chip>
                      ))}
                  </div>
                  <p className=" text-red-600">
                    {product.price}
                    <span className="line-through ml-4 text-default-500">
                      {product.price}
                    </span>
                  </p>

                  <div className="w-full flex justify-end">
                    <icons.FaPlus
                      size={24}
                      className="text-end hover:text-blue-500 mb-1 transition-all "
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductBanner;