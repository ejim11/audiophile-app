import SpeakersComp from "../Components/Speakers/SpeakersComp";
import { useEffect } from "react";

const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SpeakersComp />
    </>
  );
};

export default Speakers;
