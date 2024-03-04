import About from "../components/home/About";
import CarouselCpn from "../components/home/CarouselComponent";
import Contact from "../components/home/Contact";
import Product from "../components/home/Product";
import Footer from "../components/Footer";
import Header from "../components/header/Header";


const Home = () => {
  const images = [
    "https://img.freepik.com/premium-photo/women-s-clothes-beige-colors-open-hangers-store-selective-focus-copy-space_94255-4670.jpg",
    "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://lajolla.com/wp-content/uploads/2022/01/San-Diego-Plus-Size-Clothing-Stores.jpg",
  ];

  return (
    <>
      <Header/>
      <div className="w-full ">
        <CarouselCpn slides={images}/>
        <About className="px-container" />
        <Product className="px-container" />
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
