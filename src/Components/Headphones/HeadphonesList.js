import headPhonesData from "./headphonesData";
import classes from "./HeadphonesList.module.scss";
import structureData from "../Helper fns/structureData";

const HeadphonesList = () => {
  const headPhoneList = structureData(headPhonesData);
  return <div className={classes["headphone-list"]}>{headPhoneList}</div>;
};
export default HeadphonesList;
