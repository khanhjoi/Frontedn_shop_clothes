import moment from "moment";
import { Discount } from "../types/TProductDetail";

export const checkAvailableDiscount = (discount: any): boolean => {
  if (!discount) return false;

  const targetDate = moment(discount.dateEnd);
  const currentDate = moment(); // assuming this is the current date/time

  if (currentDate.isAfter(targetDate)) {
    return false; //
  } else {
    return true;
  }
};

export const calculateDiscountPrice = (price: number, percent: number) => {
  const discountPrice = Number(price) - (Number(price) * Number(percent)) / 100;
  return discountPrice;
};
