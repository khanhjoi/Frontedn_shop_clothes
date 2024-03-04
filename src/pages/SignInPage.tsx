import FormCustom from "../components/common/FormCustom";
import { FormProvider, useForm } from 'react-hook-form';


const SignInPage = () => {
  const methods = useForm(); 
  const { watch } = methods; 

  let template = {
    title: "Sign In",
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
            message: "Password must be greater than 8 characters"
          }
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
            console.log(watch('password'))
            if (watch('password') != val) {
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

  return (
    <div>
      <FormCustom template={template} />
    </div>
  );
};

export default SignInPage;
