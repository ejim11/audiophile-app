import HeadphoneComp from "../Components/Headphones/HeadphoneComp";
import { useEffect } from "react";

const Headphones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadphoneComp />
    </>
  );
};

export default Headphones;
