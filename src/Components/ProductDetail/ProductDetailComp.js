import { Navigate, useParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import { data } from "../../data";
import ShopAndAdvertBox from "../UI/ShopAndAdvertBox/ShopAndAdvertBox";
import ProductItemBox from "./ProductItemBox/ProductItemBox";
import ProductFeatureBox from "./ProductFeatureBox/ProductFeatureBox";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductAlternatives from "./ProductAlternatives/ProductAlternatives";
import { useEffect } from "react";
import classes from "./ProductDetailComp.module.scss";
import { useNavigate } from "react-router-dom";

const ProductDetailComp = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  let product = data.find((item) => item.slug === params.productId);

  return (
    <section>
      <div className={"header-l-bg-div"}></div>
      <div className={classes["product-detail"]}>
        <Button
          className={"back-btn"}
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </Button>
        <ProductItemBox product={product} />
        <ProductFeatureBox product={product} />
        <ProductGallery product={product} />
        <ProductAlternatives product={product} />
      </div>
      <ShopAndAdvertBox />
    </section>
  );
};

export default ProductDetailComp;
