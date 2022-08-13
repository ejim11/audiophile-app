import mark2Desk from "../../assets/category-headphones/desktop/image-xx99-mark-two.jpg";
import mark1Desk from "../../assets/category-headphones/desktop/image-xx99-mark-one.jpg";
import xx59Desk from "../../assets/category-headphones/desktop/image-xx59.jpg";
import mark2Tab from "../../assets/category-headphones/tablet/image-xx99-mark-two.jpg";
import mark1Tab from "../../assets/category-headphones/tablet/image-xx99-mark-one.jpg";
import xx59Tab from "../../assets/category-headphones/tablet/image-xx59.jpg";
import mark2Mob from "../../assets/category-headphones/mobile/image-xx99-mark-two.jpg";
import mark1Mob from "../../assets/category-headphones/mobile/image-xx99-mark-one.jpg";
import xx59Mob from "../../assets/category-headphones/mobile/image-xx59.jpg";

const headPhonesListData = [
  {
    newProduct: true,
    title: "XX99 MARK II HEADPHONES",
    text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    imgDesktop: { mark2Desk },
    imgTablet: { mark2Tab },
    imgMobile: { mark2Mob },
    alt: "XX99 MARK II HEADPHONES",
  },
  {
    newProduct: false,
    title: "XX99 MARK I HEADPHONES",
    text: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    imgDesktop: { mark1Desk },
    imgTablet: { mark1Tab },
    imgMobile: { mark1Mob },
    alt: "XX99 MARK I HEADPHONES",
  },
  {
    newProduct: false,
    title: "XX59 HEADPHONES",
    text: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    imgDesktop: { xx59Desk },
    imgTablet: { xx59Tab },
    imgMobile: { xx59Mob },
    alt: "XX59 HEADPHONES",
  },
];

export default headPhonesListData;
