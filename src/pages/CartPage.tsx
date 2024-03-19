import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  Card,
  Divider,
  TableRow,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Select,
  SelectItem,
} from "@nextui-org/react";
import icons from "../utils/Icons";
import {
  createOrder,
  getAddresses,
  getCart,
  updateProductInCart,
} from "../apis/User.api";
import { useAppDispatch, useAppSelector } from "../hooks/useSeleceter";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import AddressForm from "../components/common/AddressForm";
import { getFormatPrice } from "../utils/formatPrice";
import { setNewChange } from "../store/slice/product";
import { openNotification } from "../helpers/showNotification";

let templateAddress = {
  title: "Sign In",
  navigate: [
    {
      to: "/",
      caption: "Trở về trang chủ",
    },
    {
      to: "/signup",
      caption: "Đăng ký",
    },
  ],
  fields: [
    {
      name: "email",
      title: "Email",
      label: "Email",
      type: "email",
      description: "Enter your email",
      validate: {
        required: true,
        maxLength: 20,
      },
    },
    {
      name: "password",
      title: "Password",
      label: "Password",
      type: "password",
      description: "Enter your password",
      validate: {
        required: true,
        maxLength: 20,
        pattern: {
          value: /^.{8,}$/,
          message: "Password must be greater than 8 characters",
        },
      },
    },
  ],
  defaultValues: {
    email: "",
    password: "",
  },
};

const CartPage = () => {
  // state
  const [products, setProducts] = useState<any>();
  const [address, setAddress] = React.useState<any>(new Set([]));
  const [addressValue, setAddressValue] = React.useState<any>([]);
  const [numberProduct, setNumberProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // store
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const changFlag = useAppSelector((state) => state.product.newChange);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      openNotification({
        message: "Chưa đăng nhập",
        description: "Vui lòng đăng nhập",
        type: "error",
      });
      navigate("/signin");
    }

    (async () => {
      try {
        const cart: any = await getCart();
        const getAddress = await getAddresses();
        setAddressValue(getAddress);
        setProducts(cart);
        setTotalPriceAndNumber(cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [changFlag, token]);

  const setTotalPriceAndNumber = (cart: any) => {
    let totalProduct = 0;
    let totalPrice = 0;
    cart.forEach((product: any) => {
      totalProduct += product.quantity;
      totalPrice += product.productOption.Product.price * product.quantity;
    });
    setNumberProduct(totalProduct);
    setTotalPrice(totalPrice);
  };

  const updateProduct = async (product: any, updateQuantity: number) => {
    try {
      const data = {
        productId: product.productOption.Product.id,
        colorId: product.productOption.Color.id,
        sizeId: product.productOption.Size.id,
        quantity: updateQuantity,
      };
      const response = await updateProductInCart(data);
      dispatch(setNewChange(!changFlag));

      openNotification({
        message: "Thành công",
        description: "Cập nhật thành công",
        type: "success",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrder = async () => {
    if (!address.currentKey) {
      openNotification({
        message: "Cảnh báo",
        description: "Vui lòng chọn địa chỉ",
        type: "warning",
      });
      return;
    }

    if (products.length <= 0) {
      openNotification({
        message: "Cảnh báo",
        description: "Vui lòng chọn sản phẩm",
        type: "warning",
      });
      return;
    }

    const data = {
      total: totalPrice,
      address: address.currentKey,
      orderDetail: products,
    };

    try {
      const order = await createOrder(data);
      if (order) {
        openNotification({
          message: "Thành Công",
          description: "Đặt sản phẩm thành công",
          type: "success",
        });
        dispatch(setNewChange(!changFlag));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full px-container md:flex my-6 ">
        <div className="md:w-2/3 lg:w-3/5 mx-2">
          <div className="sticky top-12">
            <h1 className="font-bold text-2xl">Thông tin Đơn hàng</h1>
            <div>
              <Card className="w-full lg:w-4/5 mt-8">
                <CardHeader className="">
                  <div className="font-medium">
                    <h1 className="text-xl font-medium">
                      Thông tin khách hàng:
                    </h1>
                    <div className="mt-1 ml-6">
                      Họ tên:
                      <span className="font-normal">
                        {" "}
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                    <div className="mt-1 ml-6">
                      Số điện thoại:{" "}
                      <span className="font-normal">{user.phone}</span>
                    </div>
                    <div className="mt-1 ml-6">
                      <Popover placement="right">
                        <PopoverTrigger>
                          <div className="cursor-pointer">
                            Email:{" "}
                            <span className="font-normal text-slate-500">
                              {user.email}
                            </span>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Lưu ý</div>
                            <div className="text-tiny">
                              Đơn hàng của bạn sẽ được gửi qua email này.
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div>
                    <h1 className="text-xl font-medium">
                      Thông tin vận chuyển:
                    </h1>

                    <Select
                      size="sm"
                      label="Chọn địa chỉ giao hàng"
                      selectedKeys={address}
                      className="min-w-[5rem] w-1/2 mt-4"
                      onSelectionChange={setAddress}
                    >
                      <SelectItem key="newAddress" value="Thêm địa chỉ mới">
                        Thêm địa chỉ mới
                      </SelectItem>
                      {addressValue &&
                        addressValue.length > 0 &&
                        addressValue.map((address: any) => (
                          <SelectItem
                            key={`${address.nameAddress} ${address.id}`}
                            value={address.nameAddress}
                          >
                            {`${address.id}-${address.nameAddress}`}
                          </SelectItem>
                        ))}
                    </Select>
                    {address.currentKey === "newAddress" && (
                      <div>
                        <AddressForm className="mt-4" />
                      </div>
                    )}
                    {address.currentKey !== "newAddress" && (
                      <>
                        <div className="mt-4 ml-6">
                          Địa chỉ đã chọn:
                          <span className="font-normal"> {address}</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="font-medium w-full">
                    <h1 className="text-xl font-medium">
                      Thông Tin thanh toán:
                    </h1>
                    <div>
                      <h1 className="font-medium">Thông tin:</h1>
                      <p className="font-normal mt-1">
                        Số lượng sản phẩm: {numberProduct}
                      </p>
                      <p className="font-normal mt-1">
                        Thành tiền: {getFormatPrice(totalPrice)}
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <h1 className="font-medium">phương thức thanh toán:</h1>
                      <Button
                        size="md"
                        onClick={(e) => {
                          handleOrder(e);
                        }}
                        radius="full"
                        variant="bordered"
                        className="w-full  my-2"
                        startContent={
                          <img
                            src="https://www.coolmate.me/images/COD.svg"
                            alt="MOMO payment"
                            className="w-[2rem] h-[2rem]"
                          />
                        }
                      >
                        Thanh toán khi nhận hàng
                      </Button>
                      <Button
                        size="md"
                        radius="full"
                        variant="bordered"
                        className="w-full  my-2"
                        startContent={
                          <img
                            src="https://www.coolmate.me/images/vnpay.png"
                            alt="MOMO payment"
                            className="w-[2rem] h-[0.8rem]"
                          />
                        }
                      >
                        Ví điện tử VNPay/ VN QR
                      </Button>
                      <Button
                        size="md"
                        radius="full"
                        variant="bordered"
                        className="w-full border-pink-400 text-pink-400 my-2"
                        startContent={
                          <img
                            src="https://www.coolmate.me/images/momo-icon.png"
                            alt="MOMO payment"
                            className="w-[2rem] h-[2rem]"
                          />
                        }
                      >
                        Ví điện tử MoMo
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/5 mx-2">
          <h1 className="font-medium text-2xl">Giỏ hàng:</h1>
          <Table
            radius="none"
            shadow="none"
            aria-label="Example empty table"
            className="border-0 shadow-none "
          >
            <TableHeader className="bg-none ">
              <TableColumn>Sản phẩm</TableColumn>
              <TableColumn textValue=""> </TableColumn>
            </TableHeader>
            <TableBody
              emptyContent={"Chưa có sản phẩm."}
              className="max-h-[10rem]"
            >
              {products &&
                products.length > 0 &&
                products.map((product: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="overflow-hidden ">
                        <div className="text-medium max-w-[12rem] overflow-hidden font-bold truncate">
                          {product?.productOption?.Product?.name}
                        </div>
                        <div className="w-full flex justify-between items-center my-4">
                          <div className="flex items-center">
                            <Image
                              width={60}
                              src={product?.productOption?.Product?.mainImage}
                              alt="NextUI Album Cover"
                              className="w-[4rem] h-[6rem] object-cover"
                            />
                            <div className="w-[12rem] ml-2 ">
                              <p className="mt-2 font-medium">
                                Số lượng: {product?.quantity}
                              </p>
                              <p className="mt-1 font-medium">
                                Giá tiền:{" "}
                                {getFormatPrice(
                                  product?.productOption?.Product?.price
                                )}
                              </p>
                              <p className="mt-1 font-[0.8rem] text-slate-400">
                                Màu: {product?.productOption?.Color?.color}/
                                size {product?.productOption?.Size?.name}
                              </p>
                              <p className="text-[0.8rem] text-slate-400">
                                Ngày thêm:
                                {moment(product?.dateAdd).format("DD-MM-YYYY")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className=" flex items-center justify-center ">
                        <icons.FaMinus
                          size={20}
                          className="hover:text-blue-500 mx-1 "
                          onClick={() => {
                            updateProduct(product, product.quantity - 1);
                          }}
                        />
                        <icons.FaPlus
                          size={20}
                          className="hover:text-blue-500 mx-1"
                          onClick={() => {
                            updateProduct(product, product.quantity + 1);
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
