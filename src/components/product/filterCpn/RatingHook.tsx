import { Flex, Rate } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useSeleceter";
import { setRating } from "../../../store/slice/products";
import { useDispatch } from "react-redux";

const RatingHook = ({ showValue }: any) => {
  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
  const rating = useAppSelector((state) => state.products.filter.rating);

  const dispatch = useDispatch();

  const handleRating = (value: number) => {
    dispatch(setRating(value));
  };

  return (
    <Flex gap="middle" vertical>
      <Rate
        tooltips={desc}
        onChange={(e) => {
          handleRating(e);
        }}
        value={rating}
      />
      {showValue && <>{rating ? <span>{desc[rating - 1]}</span> : null}</>}
    </Flex>
  );
};

export default RatingHook;
