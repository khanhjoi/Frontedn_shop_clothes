import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Contact = (className: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div
      id="contact"
      className={`${className} px-container  mt-10 flex w-full h-[30rem] justify-center items-center`}
    >
      <div
        style={{
          backgroundImage: `url(https://i.pinimg.com/564x/e9/d4/42/e9d44240ad82110e85428cb455bd3bcf.jpg)`,
        }}
        className="w-1/4 h-full bg-no-repeat bg-center bg-contain mr-10 "
      ></div>
      <div className="w-2/5 ml-10">
        <h1 className="my-4 text-2xl">Gửi yêu cầu</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input className="my-4" placeholder="Họ" {...register("firstname")} />
          <Input className="my-4" placeholder="Tên" {...register('lastname')} />
          <Input className="my-4" placeholder="Email" {...register('email')}/>
          <Textarea
            label="Yêu cầu"
            placeholder="Enter your description"
            className="my-4"
            {...register('description')}
          />
          <Button type="submit">gửi liên hệ</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
