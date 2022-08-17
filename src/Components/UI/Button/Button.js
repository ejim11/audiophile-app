import classes from "./Button.module.scss";

const Button = (props) => {
  console.log(props.disabled);
  return (
    <button
      className={`${classes.btn} ${classes[props.className]}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
