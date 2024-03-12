import About from "../components/home/About";
import CarouselCpn from "../components/home/CarouselComponent";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ProductBanner from "../components/home/ProductBanner";
import Banner from "../components/home/Banner";

const Home = () => {
  const images = [
    "https://img.freepik.com/premium-photo/women-s-clothes-beige-colors-open-hangers-store-selective-focus-copy-space_94255-4670.jpg",
    "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://lajolla.com/wp-content/uploads/2022/01/San-Diego-Plus-Size-Clothing-Stores.jpg",
  ];

  const products: any = [
    {
      id: 1,
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.AT022.7_48.jpg",
      type: "new",
      name: "áo thể thao 1",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
    {
      id: 11,
      mainImage:
        "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMAW.TT009.15_39.jpg",
      type: "new",
      name: "áo thể thao 2",
      images: [
        {
          url: "http://",
          color: "đỏ",
        },
        {
          url: "http://",
          color: "xám",
        },
      ],
      discount: {
        percent: 10,
      },
      price: 10000,
    },
  ];

  const imageBanner = [
    'https://mcdn.coolmate.me/image/March2024/mceclip10.jpg',
  ]

  return (
    <>
      <Header />
      <div className="w-full ">
        <CarouselCpn slides={images} />
        <About className="px-container" />
        <ProductBanner
          className="px-container my-10"
          title="Hàng mới về"
          products={products}
        />
        <Banner images={imageBanner} />
        <ProductBanner
          className="px-container my-10"
          title="Sản phẩm giảm giá 30%"
          products={products}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
