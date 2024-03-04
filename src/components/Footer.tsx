import { Button } from "@nextui-org/react";
import icons from "../utils/Icons";

const Footer = () => {
  return (
    <div className="px-container bg-black h-auto w-full md:flex">
      <div className="text-white w-2/5 my-4 mx-8">
        <h1 className="text-xl font-medium mt-2">
          Chúng tui lắng nghe bạn !!!
        </h1>
        <p className="text-sm font-thin mt-2">
          Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
          khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
          nữa.
        </p>
        <Button className="mt-4 w-[8rem]" color="primary" variant="shadow">
          Liên hệ ngay
        </Button>
      </div>
      <div className="text-white w-1/3 my-4 mx-8">
        <div className="flex items-center">
          <icons.FaPhoneAlt className="w-6 h-6 cursor-pointer"></icons.FaPhoneAlt>
          <div className="ml-4">
            <p>Hotline</p>
            <p className="text-sm font-medium">
              1900.8341.9910 - 2000.3123.1909
            </p>
            <p className="text-sm font-medium">(6:00 - 20:00)</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <icons.FaMailBulk className="w-6 h-6 cursor-pointer"></icons.FaMailBulk>
          <div className="ml-4">
            <p>Email</p>
            <p className="text-sm font-medium">khanhjoi1@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-white w-2/5 my-4 mx-8">
        <div className="w-full h-3/5 mt-10 flex ">
          <a target="_blank" href="http://facebook.com">
            <icons.SiFacebook className="w-6 h-6 cursor-pointer mx-6"></icons.SiFacebook>
          </a>
          <a target="_blank" href="http://zalo.com">
            <icons.SiZalo className="w-6 h-6 cursor-pointer mx-6"></icons.SiZalo>
          </a>
          <a target="_blank" href="http://tiktok.com">
            <icons.SiTiktok className="w-6 h-6 cursor-pointer mx-6"></icons.SiTiktok>
          </a>
          <a target="_blank" href="http://linkein.com">
            <icons.SiLinkedin className="w-6 h-6 cursor-pointer mx-6"></icons.SiLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
