import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Profile from "./Profile";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserProfile, setIsLogin } from "../../store/slice/user";
import Cart from "./Cart";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import path from "../../utils/path";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcvite, setIsAcvite] = React.useState(0);
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const changeFlag = useAppSelector((state) => state.product.newChange);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserProfile());
    if (token) {
      dispatch(setIsLogin(true));
    } else {
      dispatch(setIsLogin(false));
    }
  }, [token, changeFlag, isLogin]);

  const menuItems = [
    {
      name: "Trang chủ",
      url: path.HOME,
    },
    {
      name: "Sản phẩm",
      url: path.PRODUCTS,
    },
    {
      name: "Đặt thiết kế",
      url: "/",
    }
  ];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="py-4 bg-slate-200 bg-opacity-50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <RouterLink to={"/"}>
            <p className="font-bold text-inherit">ACME</p>
          </RouterLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className={`${
                isAcvite === 0 ? "text-blue-600" : ""
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsAcvite(0);
                navigate("/");
              }}
            >
              Trang chủ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${
                isAcvite === 1 ? "text-blue-600" : ""
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsAcvite(1);
                navigate("/products");
              }}
            >
              Sản phẩm
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link
              className={`${
                isAcvite === 2 ? "text-blue-600" : ""
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4`}
              color="foreground"
              href="#contact"
              onClick={() => {
                setIsAcvite(2);
              }}
            >
              Liên hệ
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link
              className={`${
                isAcvite === 3 ? "text-blue-600" : ""
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsAcvite(3);
              }}
            >
              Đặt thiết kế
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end">
        {!isLogin && (
          <>
            <NavbarItem className="flex">
              <Button
                onClick={() => {
                  navigate("/signin");
                }}
                color="primary"
                variant="flat"
              >
                Sign In
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                color="primary"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
        {isLogin && (
          <NavbarItem className="flex">
            <Cart />
            <Profile />
          </NavbarItem>
        )}
      </NavbarContent>

      {/* nav bar reposive */}
      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              size="lg"
            >
              <RouterLink to={item.url}>{item.name}</RouterLink>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
