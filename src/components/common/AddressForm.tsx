import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addNewAddress } from "../../apis/User.api";
import { useAppSelector, useAppDispatch } from "../../hooks/useSeleceter";
import { setNewChange } from "../../store/slice/product";
import { openNotification } from "../../helpers/showNotification";

interface AddressFormProps {
  className?: string;
}

type Inputs = {
  example: string;
  exampleRequired: string;
};

const AddressForm: React.FC<AddressFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      address: "",
      district: "",
      ward: "",
      commune: "",
    },
  });
  const changeFlag = useAppSelector((state) => state.product.newChange);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data:any) => {
    try {
      const address = `${data.address}`
      const response = await addNewAddress(address)
      if(response) {
        dispatch(setNewChange(!changeFlag));
        openNotification({
          message: "Thành công",
          description: "Thêm địa chỉ thành công",
          type: "success"
        })
      }
    } catch (error) {
      console.log
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start  py-2 rounded-lg"
      >
        <div className="w-full">
          <Input
            type="text"
            variant="bordered"
            label="Địa chỉ"
            size="sm"
            radius="full"
            className="w-full"
            {...register("address", {required: true})}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          radius="full"
          className="mt-10 w-full"
        >
          Thêm địa chỉ mới
        </Button>
      </form>
    </div>
  );
};

export default AddressForm;
