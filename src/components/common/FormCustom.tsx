import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";

export type Field = {
  label: string;
  placeholder: string;
  variant: "flat" | "faded" | "bordered" | "underlined" | undefined;
  description: string;
  type: string;
  name: string;
  validate: any;
};

const FormCustom = ({ template }: any) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: template.defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const inputRegister = (name: string, validate: any) => {
    console.log();
    if (validate.validate) {
      return register(name, {
        required: true,
        maxLength: 20,
        validate: (val: string) => {
          if (watch("password") != val) {
            return "Your passwords do no match";
          }
        },
      });
    }
    return register(name, { ...validate });
  };

  const renderInputs = (fields: Field[]) => {
    return fields?.map((field: Field, key: number) => {
      const error = errors?.[field?.name]; // Access the error object for the current field
      let errorMessage = error ? error.message : undefined;
      return (
        <div key={key} className="flex flex-col w-full max-w-xs gap-4">
          <Input
            size="sm"
            className="min-w-[18rem] my-1"
            label={field?.label}
            placeholder={field?.placeholder}
            variant="bordered"
            type={field?.type}
            isInvalid={error ? true : false}
            description={field?.description}
            errorMessage={errorMessage}
            {...inputRegister(field?.name, field?.validate)}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen overflow-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start shadow-2xl px-14 py-8 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4">{template.title}</h1>
        {renderInputs(template.fields)}
        <Button color="primary" type="submit" >submit</Button>
      </form>
    </div>
  );
};

export default FormCustom;
