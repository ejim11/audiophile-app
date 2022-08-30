import classes from "./Button.module.scss";

const Button = (props) => {
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
