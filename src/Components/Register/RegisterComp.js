import classes from "./RegisterComp.module.scss";
import RegisterForm from "./RegisterForm";

const RegisterComp = () => {
  return (
    <section>
      <div className={"header-l-bg-div"}></div>

      <div className={classes["register-box"]}>
        <h1>REGISTER</h1>
        <>
          <RegisterForm />
        </>
      </div>
    </section>
  );
};

export default RegisterComp;
