import { Flex, Rate } from "antd";
import React, { useState } from "react";

const RatingHook = ({
  showValue,
  isRating,
  ratingProps,
  className,
  setShowValue,
}: any) => {
  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];

  const [rating, setRating] = useState(ratingProps);

  const handleRating = (value: number) => {
    // dispatch(setRating(value));
    if (setShowValue) {
      setShowValue(value);
    }
    setRating(value);
  };

  return (
    <Flex gap="middle" vertical>
      <Rate
        disabled={!isRating}
        tooltips={desc}
        onChange={(e) => {
          handleRating(e);
        }}
        value={rating}
        className={`text-blue-600 ${className}`}
      />
      {showValue && <>{rating ? <span>{desc[rating - 1]}</span> : null}</>}
    </Flex>
  );
};

export default RatingHook;
