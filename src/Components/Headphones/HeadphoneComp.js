// import AutoFitBox from "../UI/Auto-fit box/AutoFitBox";
import ShopAndAdvertBox from "../UI/ShopAndAdvertBox/ShopAndAdvertBox";
import HeadphonesList from "./HeadphonesList";

const HeadphoneComp = () => {
  return (
    <section>
      <div className={"absolute-div"}>Headphones</div>
      <>
        <HeadphonesList />
      </>
      <ShopAndAdvertBox />
    </section>
  );
};

export default HeadphoneComp;
