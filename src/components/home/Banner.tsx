import React from "react";

const Banner = ({ images }: any) => {
  console.log(images);
  return (
    <div className="px-container">
      <img src={images[0]} alt="banner" className="h-[8rem]"/>
    </div>
  );
};

export default Banner;
