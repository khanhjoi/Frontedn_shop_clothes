
import ProductCard from "../product/ProductCard";

const ProductBanner = ({ className, title, products }: any) => {
  console.log(products);
  return (
    <div className={`${className} relative max-w-screen overflow-auto`}>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="my-4 flex h-[28rem] overflow-auto">
        {products &&
          products.length > 0 &&
          products.map((product: any, index: number) => (
            <ProductCard key={index} product={product}/>
          ))}
      </div>
    </div>
  );
};

export default ProductBanner;
