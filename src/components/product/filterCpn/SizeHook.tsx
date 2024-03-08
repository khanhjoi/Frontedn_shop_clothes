import { RadioGroup, Radio } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useSeleceter";
import { setSize } from "../../../store/slice/products";

const SizeHook = () => {
  const [selected, setSelected] = React.useState("");
  const sizes = ["3XL", "2XL", "XL", "L", "M"];

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(selected)
    dispatch(setSize(selected));
  }, [selected]);

  return (
    <div className="flex flex-col gap-3">
      <RadioGroup
        label="Chọn size "
        value={selected}
        onValueChange={setSelected}
        orientation="horizontal"
      >
        {sizes &&
          sizes.length > 0 &&
          sizes.map((size: string, index: number) => (
            <Radio key={index} value={size}>
              {size}
            </Radio>
          ))}
      </RadioGroup>
      {/* <p className="text-default-500 text-small">Selected: {selected}</p> */}
    </div>
  );
};

export default SizeHook;
