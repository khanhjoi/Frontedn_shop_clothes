import React from "react";
import { Carousel } from "antd";

type CarouselProps = {
  slides: string[];
};

const CarouselCpn = ({ slides }: CarouselProps) => {
  return (
    <Carousel className="h-screen" autoplay dotPosition="top">
      {slides?.length &&
        slides.map((slide: string, index: number) => (
          <div className="h-screen" key={index}>
            <div
              style={{ backgroundImage: `url(${slide})` }}
              className="h-full bg-no-repeat bg-cover bg-center"
            ></div>
          </div>
        ))}
    </Carousel>
  );
};

export default CarouselCpn;
