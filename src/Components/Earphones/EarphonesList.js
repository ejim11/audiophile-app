import classes from "./EarphonesList.module.scss";
import earPhoneListData from "./earPhonesData";
import structureData from "../Helper fns/structureData";

const EarphonesList = () => {
  const earPhonesList = structureData(earPhoneListData);

  return <div className={classes["earphones-list"]}>{earPhonesList}</div>;
};

export default EarphonesList;
