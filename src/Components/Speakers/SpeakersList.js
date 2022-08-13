import speakersListData from "./SpeakersData";
import classes from "./SpeakersList.module.scss";
import structureData from "../Helper fns/structureData";

const SpeakersList = () => {
  const speakersList = structureData(speakersListData);
  return <div className={classes["speakers-list"]}>{speakersList}</div>;
};
export default SpeakersList;
