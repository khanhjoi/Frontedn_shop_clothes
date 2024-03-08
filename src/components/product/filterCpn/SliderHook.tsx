import React, { memo } from "react";
import { Slider } from "@nextui-org/react";

const SliderHook = memo(() => {
  const [value, setValue] = React.useState([0, 9000000]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        label="Khoản tiền"
        formatOptions={{ style: "currency", currency: "VND" }}
        step={10000}
        maxValue={9000000}
        minValue={0}
        value={value}
        onChange={setValue}
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