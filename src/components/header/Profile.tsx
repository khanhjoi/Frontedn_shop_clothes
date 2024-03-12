import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { logout } from "../../apis/Auth.api";
import { useAppDispatch } from "../../hooks/useSeleceter";
import { setIsLogin } from "../../store/slice/user";

const Profile = ({ user }: any) => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    const response = await logout();
    if (response) {
      localStorage.removeItem("token");
      dispatch(setIsLogin(false));
    }
  };
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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

        <DropdownItem key="settings">
          <Link to={"/profile"}>Chi tết trang cá nhân</Link>
        </DropdownItem>

        <DropdownItem key="analytics">
          <Link to={"/card"}>Giỏ hàng</Link>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleLogout}>
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
