import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Image,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  Popover,
  TableRow,
  Tabs,
} from "@nextui-org/react";
import icons from "../utils/Icons";
import { useAppDispatch, useAppSelector } from "../hooks/useSeleceter";
import { deleteAddress, getAddresses, getOrders } from "../apis/User.api";
import AddressForm from "../components/common/AddressForm";
import { useNavigate } from "react-router-dom";
import { openNotification } from "../helpers/showNotification";
import { setNewChange } from "../store/slice/product";
import EditUser from "../components/userDetail/EditUser";
import { getFormatPrice } from "../utils/formatPrice";
import { Modal } from "antd";
import moment from "moment";
import axiosClient from "../libs/axios-client";

const UserDetailPage = () => {
  const [address, setAddress] = React.useState<any>(new Set([]));
  const [addressValue, setAddressValue] = React.useState<any>([]);
  const [idAddress, setIdAddress] = useState(-1);
  const [isOpenAddress, setIsOpenAddress] = React.useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [detailOrder, setDetailOrder] = useState<any>([]);
  const [orders, setOrders] = useState<any>([]);
  const [editUser, setEditUser] = useState(false);

  const user = useAppSelector((state) => state.user.user);
  const changeFlag = useAppSelector((state) => state.product.newChange);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  const [changeFlagOrder, setChangeFlagOrder] = useState(false);
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
        const response = await getOrders();
        if (response) {
          setOrders(response);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [changeFlagOrder]);

  useEffect(() => {
    (async () => {
      try {
        const getAddress = await getAddresses();
        setAddressValue(getAddress);
      } catch (error: any) {
        if (
          error?.response?.status === 401 &&
          error?.response?.data.message === "Unauthorized"
        ) {
          openNotification({
            message: "Chưa đăng nhập",
            description: "Vui lòng đăng nhập",
            type: "error",
          });
          navigate("/signin");
        }
      }
    })();
  }, [changeFlag, token]);

  const handleDeleteAddress = async () => {
    try {
      const address: any = await deleteAddress(idAddress);

      if (address) {
        setIdAddress(-1);
        setIsOpenAddress(false);
        dispatch(setNewChange(!changeFlag));
        openNotification({
          message: "Thành công",
          description: `Đã xóa thành công địa chỉ ${address?.nameAddress}`,
          type: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateOrder = async (value: any, orderId: number) => {
    console.log(value.innerText);
    console.log(orderId);
    let orderStatus:string = "IS_PENDING";

    if(value.innerText === "Đã Nhận Được Hàng") {
      orderStatus = "IS_SUCCESS"
    }else if(value.innerText === "Từ Chối") {
      orderStatus = "IS_CANCELLED"
    }
    try {
      const response = await axiosClient.put(`/user/orders/${orderId}`, {
        orderStatus: orderStatus
      });
      if(response) {
        setChangeFlagOrder(!changeFlagOrder);
        openNotification({
          message: `Cập nhật thành công`,
          description: `Đơn hàng đã cập nhật`,
          type:"success",
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStatus = (status: string, orderId: number) => {
    switch (status) {
      case "IN_PROGRESS":
        return (
          <Chip className="capitalize" color="primary" size="sm" variant="flat">
            Đang xử lý
          </Chip>
        );
      case "IS_PENDING":
        return (
          <div>
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Chip
                  className="capitalize cursor-pointer"
                  color="warning"
                  size="sm"
                  variant="flat"
                >
                  Đang Gửi hàng
                </Chip>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold mb-2">
                    Xác nhận trạng thái đơn hàng
                  </div>
                  <Chip
                    startContent={<icons.FaCheck size={18} />}
                    className="capitalize cursor-pointer mx-2"
                    color="success"
                    size="sm"
                    variant="flat"
                    onClick={(e) => {
                      handleUpdateOrder(e.target, orderId);
                    }}
                  >
                    Đã nhận được hàng
                  </Chip>
                  <Chip
                    startContent={<icons.MdCancel size={18} />}
                    className="capitalize cursor-pointer mx-2"
                    color="warning"
                    size="sm"
                    variant="flat"
                    onClick={(e) => {
                      handleUpdateOrder(e.target, orderId);
                    }}
                  >
                    Từ chối
                  </Chip>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        );
      case "IS_SUCCESS":
        return (
          <Chip className="capitalize" color="success" size="sm" variant="flat">
            Thành công
          </Chip>
        );
      case "DELIVERED":
        return (
          <Chip className="capitalize" color="success" size="sm" variant="flat">
            giao thành công
          </Chip>
        );
      case "IS_CANCELLED":
        return (
          <Chip className="capitalize" color="danger" size="sm" variant="flat">
            Đã hủy đơn
          </Chip>
        );
      case "RETURNED":
        return (
          <Chip className="capitalize" color="danger" size="sm" variant="flat">
            Đã trả lại
          </Chip>
        );
      case "REFUNDED":
        return (
          <Chip className="capitalize" color="danger" size="sm" variant="flat">
            Đã hoàng tiền
          </Chip>
        );
      default:
        return "Unknown status";
    }
  };

  const handleOk = () => {
    setIsOpenOrder(false);
  };

  const handleCancel = () => {
    setIsOpenOrder(false);
  };

  return (
    <div>
      <Header />
      <div className="w-full px-container lg:flex lg:justify-between my-10">
        <div className="w-full lg:w-2/5   lg:mr-2">
          <div className="flex items-center justify-center mt-8">
            <Avatar
              icon={<icons.RxAvatar />}
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={`${user.firstName} ${user.lastName}`}
              size="lg"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-3xl font-medium flex justify-center items-center">
              {`${user.firstName} ${user.lastName}`}{" "}
              <icons.CiEdit
                size={24}
                className="mt-2 ml-2 hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  setEditUser(true);
                }}
              />
            </p>
            <p className="text-center text-md font-normal mt-1">{`Email: ${user.email}`}</p>
            <p className="text-center text-md font-normal mt-1">{`Phone: ${user.phone}`}</p>
          </div>
          <div className="mt-4">
            <p className="text-xl font-semibold">Địa chỉ:</p>
            <div className="w-full flex items-center justify-between">
              <Select
                size="sm"
                label="Địa chỉ"
                selectedKeys={address}
                className="min-w-[5rem] w-full mt-4"
                onSelectionChange={setAddress}
                onOpenChange={(open) =>
                  open !== isOpenAddress && setIsOpenAddress(open)
                }
              >
                <SelectItem
                  onClick={() => setIsOpenAddress(false)}
                  key="newAddress"
                  value="Thêm địa chỉ mới"
                >
                  Thêm địa chỉ mới
                </SelectItem>
                {addressValue &&
                  addressValue.length > 0 &&
                  addressValue.map((address: any, index: number) => (
                    <SelectItem
                      onClick={() => {
                        setIsOpenAddress(true);
                        setIdAddress(address.id);
                      }}
                      key={`${address.nameAddress} ${address.id}`}
                      value={address.nameAddress}
                    >
                      {`${index + 1}-${address.nameAddress}`}
                    </SelectItem>
                  ))}
              </Select>
              {isOpenAddress && (
                <icons.CiTrash
                  size={24}
                  className="mt-4 hover:text-blue-500 cursor-pointer ml-4"
                  onClick={() => {
                    handleDeleteAddress();
                  }}
                />
              )}
            </div>
            {address.currentKey === "newAddress" && (
              <div>
                <AddressForm className="mt-4" />
              </div>
            )}
          </div>
          <EditUser isModalOpen={editUser} setIsModalOpen={setEditUser} />
        </div>
        {/* table orders */}
        <div className="w-full lg:w-3/5 min-h-[24rem] b lg:ml-2 mt-2 lg:mt-4">
          <Tabs aria-label="Options">
            <Tab key="order" title="Đơn hàng">
              <Card>
                <Table
                  aria-label="Example empty table"
                  classNames={{
                    base: "max-h-[520px] overflow-auto",
                    table: "min-h-[420px]",
                  }}
                >
                  <TableHeader>
                    <TableColumn>STT</TableColumn>
                    <TableColumn>thông tin người nhận</TableColumn>
                    <TableColumn>Địa chỉ</TableColumn>
                    <TableColumn>Trạng thái</TableColumn>
                    <TableColumn>Xem Chi tiết đơn hàng</TableColumn>
                  </TableHeader>
                  <TableBody emptyContent={"Chưa có đơn hàng nào"}>
                    {/* {orders && orders.length <= 0 && ""} */}
                    {orders &&
                      orders.length > 0 &&
                      orders.map((order: any, index: number) => (
                        <TableRow key={index + 1}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm font-medium">
                                Họ và Tên:
                                <span className="font-normal">
                                  {" "}
                                  {order.user.firstName} {order.user.lastName}
                                </span>
                              </p>
                              <p className="text-sm font-medium">
                                Email:
                                <span className="font-normal">
                                  {order.user.email}
                                </span>
                              </p>
                              <p className="text-sm font-medium">
                                SĐT:
                                <span className="font-normal">
                                  {order.user.phone}
                                </span>
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{order.address}</TableCell>
                          <TableCell>
                            {getStatus(order.status, order.id)}
                          </TableCell>
                          <TableCell>
                            <Chip
                              variant="faded"
                              color="default"
                              size="sm"
                              className="cursor-pointer ml-6  transition-all duration-75"
                              onClick={() => {
                                console.log("order", order);
                                setIsOpenOrder(true);
                                setDetailOrder(order.OrderDetail);
                              }}
                            >
                              Xem thêm
                            </Chip>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
      <Modal
        visible={isOpenOrder}
        title="Thông tin đơn hàng"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Table
          radius="none"
          shadow="none"
          aria-label="Example empty table"
          className="border-0 shadow-none "
          classNames={{
            base: "max-h-[440px] overflow-auto",
            table: "min-h-[400px]",
          }}
        >
          <TableHeader className="bg-none ">
            <TableColumn>Sản phẩm</TableColumn>
          </TableHeader>
          <TableBody
            emptyContent={"Chưa có sản phẩm."}
            className="max-h-[10rem]"
          >
            {detailOrder &&
              detailOrder.length > 0 &&
              detailOrder.map((product: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="overflow-hidden ">
                      <div className="text-medium max-w-[20rem] overflow-hidden font-bold truncate">
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
                              Màu: {product?.productOption?.Color?.color}/ size{" "}
                              {product?.productOption?.Size?.name}
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Modal>
    </div>
  );
};

export default UserDetailPage;
