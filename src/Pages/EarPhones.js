import EarphonesComp from "../Components/Earphones/EarphonesComp";
import { useEffect } from "react";

const EarPhones = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <EarphonesComp />
    </>
  );
};

export default EarPhones;
