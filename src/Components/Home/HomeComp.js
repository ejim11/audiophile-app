import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import classes from "./HomeComp.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import Button from "../UI/Button/Button";
import ShopList from "./ShopList";
import ProductSample from "./ProductSample";
import Advert from "../Home/Advert";
import { useNavigate } from "react-router-dom";

const slideInfo = [
  {
    heading: "XX99 MARK II HEADPHONES",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  },
  {
    heading: "XX99 MARK II HEADPHONES",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  },
  {
    heading: "XX99 MARK II HEADPHONES",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  },
];

const HomeComp = () => {
  const navigate = useNavigate();

  const navToProduct = () => {
    navigate("/product/xx99-mark-two-headphones");
  };

  const slides = slideInfo.map((item, i) => (
    <SwiperSlide
      key={i}
      className={`${classes["swiper-slide"]} ${classes[`slide-${i + 1}`]}`}
    >
      <div className={classes["swipe-info"]}>
        <h3>NEW PRODUCT</h3>
        <p className={classes["title"]}>{item.heading}</p>
        <p className={classes["description"]}>{item.description}</p>
        <Button className={"btn-sample-3"} onClick={navToProduct}>
          SEE PRODUCT
        </Button>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <section className={classes["swipe-section"]}>
        <Swiper
          className={classes["swiper"]}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides}
        </Swiper>
      </section>
      <section className={"shop-list-section margin-ut"}>
        <ShopList />
      </section>
      <section className={classes["product-sample-section"]}>
        <ProductSample />
      </section>
      <section className={"advert-section"}>
        <Advert />
      </section>
    </>
  );
};

export default HomeComp;
