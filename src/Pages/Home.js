import HomeComp from "../Components/Home/HomeComp";
import { useEffect} from "react"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HomeComp />
    </>
  );
};

export default Home;
