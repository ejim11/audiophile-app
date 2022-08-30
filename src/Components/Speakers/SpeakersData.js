import zx9Desk from "../../assets/category-speakers/desktop/image-zx9.jpg";
import zx7Desk from "../../assets/category-speakers/desktop/image-zx7.jpg";
import zx9Tab from "../../assets/category-speakers/tablet/image-zx9.jpg";
import zx7Tab from "../../assets/category-speakers/tablet/image-zx7.jpg";
import zx9Mob from "../../assets/category-speakers/mobile/image-zx9.jpg";
import zx7Mob from "../../assets/category-speakers/mobile/image-zx7.jpg";

const speakersListData = [
  {
    newProduct: true,
    title: "ZX9 SPEAKER",
    text: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    imgDesktop: { zx9Desk },
    imgTablet: { zx9Tab },
    imgMobile: { zx9Mob },
    alt: "ZX9 SPEAKER",
    slug: "/product/zx9-speaker",
  },
  {
    newProduct: false,
    title: "ZX7 SPEAKER",
    text: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    imgDesktop: { zx7Desk },
    imgTablet: { zx7Tab },
    imgMobile: { zx7Mob },
    alt: "ZX7 SPEAKER",
    slug: "/product/zx7-speaker",
  },
];

export default speakersListData;
