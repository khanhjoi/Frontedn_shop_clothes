import { Flex, Rate } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useSeleceter";
import { useDispatch } from "react-redux";

const RatingHook = ({ showValue, isRating, ratingProps }: any) => {

  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
  
  console.log(ratingProps)
  const [rating, setRating] = useState(ratingProps);

  const handleRating = (value: number) => {
    // dispatch(setRating(value));
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
        className="text-blue-600"
      />
      {showValue && <>{rating ? <span>{desc[rating - 1]}</span> : null}</>}
    </Flex>
  );
};

export default RatingHook;
