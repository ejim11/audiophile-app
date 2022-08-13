import ShopList from "../../Home/ShopList";
import Advert from "../../Home/Advert";

const ShopAndAdvertBox = () => {
  return (
    <>
      <div className={"shop-list-section margin-sa"}>
        <ShopList />
      </div>
      <div className={"advert-section"}>
        <Advert />
      </div>
    </>
  );
};

export default ShopAndAdvertBox;
