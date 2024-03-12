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
    title: "Sign Up",
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
        label: "First name",
        type: "text",
        description: "Enter your first name",
        validate: {
          required: true,
          maxLength: 20,
        },
      },
      {
        name: "lastName",
        title: "Last Name",
        label: "Last name",
        type: "text",
        description: "Enter your last name",
        validate: {
          required: true,
          maxLength: 20,
        },
      },
      {
        name: "email",
        title: "Email",
        label: "Email Address",
        type: "email",
        description: "We'll never share your email with anyone else",
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
        label: "Phone Number",
        type: "phone",
        description: "We'll never share your phone with anyone else",
        validate: {
          required: true,
          maxLength: 20,
          pattern: {
            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            message: "Invalid phone Address",
          },
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
      ,
      {
        name: "passwordConfirm",
        title: "passwordConfirm",
        label: "Password Confirm",
        type: "password",
        description: "Enter your password confirm",
        validate: {
          required: true,
          maxLength: 20,
          validate: (val: string) => {
            if (watch("password") != val) {
              return "Your passwords do no match";
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
