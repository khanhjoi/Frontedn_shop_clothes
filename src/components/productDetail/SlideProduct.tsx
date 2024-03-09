import React from "react";

import icons from "../../utils/Icons";

const SlideProduct = ({ className }: any) => {

  return (
    <div
      className={`lg:flex justify-around transition-all duration-100 ${className}`}
    >
      <div className="flex lg:flex-col">
        <div className="h-[8rem] w-[8rem] lg:h-[4.4rem] lg:w-[3rem] overflow-hidden rounded-md shadow-md cursor-pointer opacity-50 mr-4 lg:mr-0 mb-4">
          <img
            className="object-contain"
            src="https://mcdn2.coolmate.me/cdn-cgi/image/format=auto/uploads/October2023/ATJW.6.jpg"
            alt=""
          />
        </div>
        <div className="h-[8rem] w-[8rem] lg:h-[4.4rem] lg:w-[3rem] overflow-hidden rounded-md shadow-md cursor-pointer mr-4 lg:mr-0 mb-4">
          <img
            className="object-contain"
            src="https://mcdn2.coolmate.me/cdn-cgi/image/format=auto/uploads/October2023/ATJW.5.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-slate-300 mx-auto h-[28rem] w-[20rem] md:h-[28rem] md:w-[30rem] lg:mx-0 lg:h-[28rem] lg:w-[19rem] shadow-md rounded-md overflow-hidden relative">
        <img
          className="object-contain"
          src="https://mcdn2.coolmate.me/cdn-cgi/image/format=auto/uploads/October2023/ATJW.5.jpg"
          alt=""
        />
        <icons.FaArrowCircleLeft
          size={26}
          className="absolute top-1/2 left-2  hover:text-blue-600  cursor-pointer transition-all duration-75"
        />
        <icons.FaArrowCircleRight
          size={26}
          className="absolute top-1/2 right-2 hover:text-blue-600  cursor-pointer transition-all duration-75"
        />
      </div>
    </div>
  );
};

export default SlideProduct;
