import { Flex, Rate } from "antd";
import React, { useState } from "react";

const RatingHook = ({ showValue }: any) => {
  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];

  const [value, setValue] = useState(3);
  
  return (
    <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {showValue && <>{value ? <span>{desc[value - 1]}</span> : null}</>}
    </Flex>
  );
};

export default RatingHook;
