import { RadioGroup, Radio } from "@nextui-org/react";

import React from "react";

const SizeHook = () => {
  const [selected, setSelected] = React.useState("");
  const sizes = ["3XL", "2XL", "XL", "L", "L"];

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
          sizes.map((size:string, index:number) => <Radio key={index} value={size}>{size}</Radio>)}
      </RadioGroup>
      {/* <p className="text-default-500 text-small">Selected: {selected}</p> */}
    </div>
  );
};

export default SizeHook;
