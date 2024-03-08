import {
  DropdownTrigger,
  NavbarContent,
  Badge,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Image,
} from "@nextui-org/react";
import icons from "../../utils/Icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const item = [
    {
      mainImage: "http://12333",
      name: "áo 1",
      price: 1333,
      quantity: 1,
    },
    {
      mainImage: "http://12333",
      name: "áo 1",
      price: 1333,
      quantity: 1,
    },
    {
      mainImage: "http://12333",
      name: "áo 1",
      price: 1333,
      quantity: 1,
    },
  ];

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <Badge content="10+" shape="circle" color="danger" className="mr-6">
          <DropdownTrigger>
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
              className="mr-6"
            >
              <icons.CiShoppingCart size={24} />
            </Button>
          </DropdownTrigger>
        </Badge>
        <DropdownMenu
          aria-label="cart Actions"
          variant="flat"
          className="w-[24rem]"
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem
              className="h-14 gap-2 bg-hover-dropdown-item"
              key="cart"
              isReadOnly={true}
            >
              <p className="font-semibold text-md text-center ">GIỎ HÀNG</p>
            </DropdownItem>
          </DropdownSection>
          <DropdownItem
            key="cart"
            className="max-h-[18rem] bg-hover-dropdown-item overflow-auto"
            isReadOnly={true}
          >
            <div className="overflow-hidden mt-">
              <div className="text-medium font-bold truncate">Áo 1</div>
              <div className="w-full flex justify-between items-center my-4">
                <div className="flex">
                  <Image
                    width={60}
                    src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                    alt="NextUI Album Cover"
                  />
                  <div className="w-[12rem] ml-2 ">
                    <p className="my-2 ">Số lượng: 1</p>
                    <p className="my-2 ">giá tiền: 100.000.000đ</p>
                  </div>
                </div>
                <div className=" flex w-1/6 justify-around">
                  <icons.FaPlus size={20} className="hover:text-blue-500"/>
                  <icons.FaMinus size={20} className="hover:text-blue-500" />
                </div>
              </div>
            </div>
            
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

export default Cart;
