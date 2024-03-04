import React from "react";
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
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Profile from "./Profile";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcvite, setIsAcvite] = React.useState(0);
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 `}
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
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4`}
              color="foreground"
              onClick={() => {
                setIsAcvite(1);
                navigate("/products");
              }}
            >
              Sản phẩm
            </Link>
          </NavbarItem>
          <NavbarItem>
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
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${
                isAcvite === 3 ? "text-blue-600" : ""
              } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4`}
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
            <NavbarItem className="hidden md:flex">
              <Input
                classNames={{
                  base: "hidden md:block max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<IoIosSearch size={18} />}
                type="search"
              />
            </NavbarItem>
            <NavbarItem></NavbarItem>
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
          <NavbarItem>
            
            <Profile />
          </NavbarItem>
        )}
      </NavbarContent>

      {/* nav bar reposive */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
