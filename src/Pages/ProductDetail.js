import ProductDetailComp from "../Components/ProductDetail/ProductDetailComp";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductDetailComp />
    </>
  );
};

export default Products;
