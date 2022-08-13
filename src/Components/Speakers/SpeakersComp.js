import ShopAndAdvertBox from "../UI/ShopAndAdvertBox/ShopAndAdvertBox";
import SpeakersList from "./SpeakersList";

const SpeakersComp = () => {
  return (
    <section>
      <div className={"absolute-div"}>Speakers</div>
      <>
        <SpeakersList />
      </>
      <ShopAndAdvertBox />
    </section>
  );
};

export default SpeakersComp;
