import classes from "./LoginComp.module.scss";
import LoginForm from "./LoginForm";

const LoginComp = () => {
  return (
    <section>
      <div className={"header-l-bg-div"}></div>

      <div className={classes["login-box"]}>
        <h1>LOGIN</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginComp;
