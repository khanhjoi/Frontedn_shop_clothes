import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const About = (className: any) => {
  return (
    <div
      className={`${className} px-container mt-10  lg:flex w-full lg:h-[30rem] lg:justify-center lg:items-center`}
    >
      <div
        style={{
          backgroundImage: `url(https://i.pinimg.com/564x/e9/d4/42/e9d44240ad82110e85428cb455bd3bcf.jpg)`,
        }}
        className="w-full h-[26rem] md:w-3/5 md:h-[24rem] lg:w-1/4 lg:h-full rounded-lg bg-no-repeat bg-center bg-cover shadow-lg md:mx-auto  lg:mx-0 lg:mr-10"
      ></div>
      <div className="w-full my-6 lg:w-2/5 lg:ml-10">
        <div className="text-slate-700 text-xl my-2 ">
          Sản phẩm giảm giá 50% tháng này
        </div>
        <h2 className="text-3xl font-semibold my-2">Bộ xu tập mới năm 2024</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          deserunt, distinctio ipsa soluta cupiditate aliquam voluptas
          asperiores modi tenetur repudiandae pariatur quasi accusantium
          molestias expedita necessitatibus praesentium rem! Impedit, magni.
        </p>
        <Button className="border-blue-600 text-blue-600" variant="bordered">
          <Link to={"/products"}>Mua ngay</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
