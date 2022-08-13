import EarphonesList from "./EarphonesList";
import ShopAndAdvertBox from "../UI/ShopAndAdvertBox/ShopAndAdvertBox";

const EarphonesComp = () => {
  return (
    <section>
      <div className={"absolute-div"}>Earphones</div>
      <>
        <EarphonesList />
      </>
      <ShopAndAdvertBox />
    </section>
  );
};

export default EarphonesComp;
