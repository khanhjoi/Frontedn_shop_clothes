import FormCustom from "../components/common/FormCustom";
import { useForm } from "react-hook-form";
import { SigUpReq } from "../types/TAuth";
import { Link, useNavigate } from "react-router-dom";
import { openNotification } from "../helpers/showNotification";
import { Notification } from "../types/TNotification";
import { signUp } from "../apis/Auth.api";

const SignUpPage = () => {
  const methods = useForm();
  const { watch } = methods;
  const navigate = useNavigate();

  let template = {
    title: "Đăng ký",
    navigate: [
      {
        to: "/",
        caption: "Trở về trang chủ",
      },
      {
        to: "/signin",
        caption: "Đăng nhập",
      },
    ],
    fields: [
      {
        name: "firstName",
        title: "First Name",
        label: "Tên",
        type: "text",
        description: "Nhập Tên của bạn",
        validate: {
          required: true,
          maxLength: 20,
        },
      },
      {
        name: "lastName",
        title: "Last Name",
        label: "Họ",
        type: "text",
        description: "Nhập Họ của bạn",
        validate: {
          required: true,
          maxLength: 20,
        },
      },
      {
        name: "email",
        title: "Email",
        label: "Địa chỉ Email",
        type: "email",
        description: "Nhập địa chỉ email của bạn",
        validate: {
          required: true,
          maxLength: 20,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Invalid Email Address",
          },
        },
      },
      {
        name: "phone",
        title: "Phone Number",
        label: "Số điện thoại",
        type: "phone",
        description: "Nhập số điện thoại của bạn",
        validate: {
          required: true,
          maxLength: 20,
          pattern: {
            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            message: "Số điện thoại không hợp lệ!",
          },
        },
      },
      {
        name: "password",
        title: "Password",
        label: "Password",
        type: "password",
        description: "Nhập mật khẩu",
        validate: {
          required: true,
          maxLength: 20,
          pattern: {
            value: /^.{8,}$/,
            message: "Mật khẩu phải hơn 8 kí tự",
          },
        },
      },
      ,
      {
        name: "passwordConfirm",
        title: "passwordConfirm",
        label: "Nhập lại mật khẩu",
        type: "password",
        description: "Vui lòng nhập lại mật khẩu",
        validate: {
          required: true,
          maxLength: 20,
          validate: (val: string) => {
            if (watch("password") != val) {
              return "Mật khẩu nhập lại không đúng";
            }
          },
        },
      },
    ],
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  };

  const onSubmitHandle = async (data: SigUpReq) => {
    try {
      const value = await signUp(data);
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

  return (
    <div>
      <FormCustom template={template} onSubmitHandle={onSubmitHandle} />
    </div>
  );
};

export default SignUpPage;
