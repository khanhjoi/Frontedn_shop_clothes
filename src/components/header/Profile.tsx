import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { logout } from "../../apis/Auth.api";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import { setIsLogin } from "../../store/slice/user";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await logout();
    if (response) {
      localStorage.removeItem("token");
      dispatch(setIsLogin(false));
    }
  };

  const user = useAppSelector((state) => state.user.user);
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={`${user.firstName} ${user.lastName}`}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">
            Người dùng:
            <span className="font-normal block">
              {user.firstName} {user.lastName}
            </span>
          </p>
          <p className="">{user.email}</p>
        </DropdownItem>

        <DropdownItem onClick={() => navigate("/profile")} key="settings">
          Chi tết trang cá nhân
        </DropdownItem>

        <DropdownItem onClick={() => navigate("/cart")} key="cart">
          Giỏ hàng
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleLogout}>
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
