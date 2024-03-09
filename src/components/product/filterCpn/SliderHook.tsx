import React, { memo } from "react";
import { Slider } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useSeleceter";
import { setPrice } from "../../../store/slice/products";
import { useDebounce } from "use-debounce";

const SliderHook = memo(() => {
  const [value, setValue] = React.useState([0, 9000000]);
  const dispatcher = useAppDispatch();

  // 1000ms debounce

  const setValueHandle = (value: any) => {
    setValue(value);
  };

  const handleSliderChangeComplete = () => {
    // Dispatch the API call only when the slider interaction is complete
    dispatcher(setPrice(value));
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        label="Khoản tiền"
        formatOptions={{ style: "currency", currency: "VND" }}
        step={10000}
        maxValue={9000000}
        minValue={0}
        value={value}
        onChange={setValueHandle}
        onChangeEnd={handleSliderChangeComplete} // Call API when slider interaction is complete
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Khoản tiền:{" "}
        {Array.isArray(value) && value.map((b) => `₫${b}`).join(" – ")}
      </p>
    </div>
  );
});

export default SliderHook;
