import classes from "./AutoFixBox.module.scss";

const AutoFitBox = (props) => {
  return (
    <div className={`${classes["auto-fit-box"]} ${classes[props.className]}`}>
      {props.children}
    </div>
  );
};

export default AutoFitBox;
