import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        <div className="w-full flex justify-between">
          <Select
            size="sm"
            label="Tỉnh"
            selectedKeys=""
            variant="bordered"
            radius="full"
            className="w-1/4 mt-4"
            {...register("district",  {required: true})}
            onSelectionChange={() => {}}
          >
            <SelectItem key="hà nội" value="hà nội">
              Hà nội
            </SelectItem>
          </Select>
          <Select
            size="sm"
            label="Huyện"
            selectedKeys=""
            variant="bordered"
            radius="full"
            className="w-1/4 mt-4"
            {...register("ward",  {required: true})}
            onSelectionChange={() => {}}
          >
            <SelectItem key="newAddress" value="Thêm địa chỉ mới">
              Thêm địa chỉ mới
            </SelectItem>
            <SelectItem key={1} value="1">
              địa chỉ 1
            </SelectItem>
          </Select>
          <Select
            size="sm"
            label="Xã"
            selectedKeys=""
            variant="bordered"
            radius="full"
            className="w-1/4 mt-4"
            {...register("commune")}
            onSelectionChange={() => {}}
          >
            <SelectItem key="newAddress" value="Thêm địa chỉ mới">
              Thêm địa chỉ mới
            </SelectItem>
            <SelectItem key={1} value="1">
              địa chỉ 1
            </SelectItem>
          </Select>
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
