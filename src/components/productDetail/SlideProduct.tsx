import React, { useEffect, useState } from "react";
import icons from "../../utils/Icons";
import { Images } from "../../types/TProductDetail";

interface SlideProductProps {
  images: Images[];
  className?: String;
}

const SlideProduct: React.FC<SlideProductProps> = ({
  images,
  className,
}: any) => {
  const [imageActive, setImageActive] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClickImage = (index: number) => {
    setImageActive(images[index]);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
    setImageActive(images[index]);
  };

  const prevSlide = () => {
    const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(index);
    setImageActive(images[index]);
  };

  return (
    <div
      className={`lg:flex justify-around transition-all duration-100 ${className}`}
    >
      <div className="flex lg:flex-col select-none">
        {images &&
          images.length > 0 &&
          images.map((image: Images, index: number) => (
            <div
              key={index}
              className={`h-[8rem] w-[8rem] lg:h-[4.4rem] lg:w-[3rem] overflow-hidden rounded-md shadow-md cursor-pointer mr-4 lg:mr-4 mb-4 transition-all duration-100
              ${activeIndex === index ? "" : "opacity-40"}
              `}
            >
              <img
                onClick={() => {
                  handleOnClickImage(index);
                }}
                className="object-cover h-full w-full"
                src={image?.filePath}
                alt={image?.captions}
              />
            </div>
          ))}
      </div>
      <div className="mx-auto h-[28rem] w-[20rem] md:h-[28rem] md:w-[30rem] lg:mx-0 lg:h-[28rem] lg:w-[19rem] shadow-md rounded-md overflow-hidden relative select-none">
        <img
          className="h-full w-full object-cover flex-grow transition-all duration-300"
          src={imageActive && imageActive.filePath}
          alt=""
        />
        <icons.FaArrowCircleLeft
          size={26}
          onClick={prevSlide}
          className="absolute top-1/2 left-2  hover:text-blue-600  cursor-pointer transition-all duration-75"
        />
        <icons.FaArrowCircleRight
          size={26}
          onClick={nextSlide}
          className="absolute top-1/2 right-2 hover:text-blue-600  cursor-pointer transition-all duration-75"
        />
      </div>
    </div>
  );
};

export default SlideProduct;
