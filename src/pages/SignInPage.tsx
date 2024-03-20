import FormCustom from "../components/common/FormCustom";
import { signIn } from "../apis/Auth.api";
import { SignRes } from "../types/TAuth";
import { openNotification } from "../helpers/showNotification";
import { Notification } from "../types/TNotification";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const onSubmitHandle = async (data: SignRes) => {
    try {
      const value = await signIn(data);
      if (value) {
        localStorage.setItem("token", JSON.stringify(value));
        navigate("/");
      }
      return true;
    } catch (errorData: any) {
      const message: Notification = {
        message: errorData?.message,
        description: errorData?.response?.data?.message,
        type: "error",
      };
      openNotification(message);
      return false;
    }
  };

  let template = {
    title: "Đăng nhập",
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
        description: "Nhập Email",
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
        description: "Nhập password",
        validate: {
          required: true,
          maxLength: 20,
          pattern: {
            value: /^.{8,}$/,
            message: "Mật khẩu phải hơn 8 ký tự",
          },
        },
      },
    ],
    defaultValues: {
      email: "",
      password: "",
    },
  };

  return (
    <div>
      <FormCustom template={template} onSubmitHandle={onSubmitHandle} />
    </div>
  );
};

export default SignInPage;
