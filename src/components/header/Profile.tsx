import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";


const Profile = ({ user }: any) => {
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
          <p className="font-semibold">Người dùng</p>
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">Chi tết trang cá nhân</DropdownItem>
        <DropdownItem key="analytics">Giỏ hàng</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
