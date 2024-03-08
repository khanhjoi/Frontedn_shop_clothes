import RatingHook from "./RatingHook";
import SizeHook from "./SizeHook";
import SliderHook from "./SliderHook";

const Filter = () => {
  console.log(`Filter rerender`);
  return (
    <div>
      <h2 className="my-4 text-medium font-semibold">LỌC SẢN PHẨM</h2>
      <div className="my-4">
        <h1 className="font-semibold text-xl mb-4">Khoản giá </h1>
        <SliderHook />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-xl mb-4">Đánh giá</h1>
        <RatingHook  />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-xl mb-4">Đánh giá</h1>
       <SizeHook />
      </div>
    </div>
  );
};

export default Filter;
