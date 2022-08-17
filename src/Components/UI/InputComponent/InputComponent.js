// import useInput from "../../../hooks/user-input";

// const InputComponent = (props) => {
//   const {
//     value: enteredText,
//     valueIsValid: enteredTextIsValid,
//     valueHasError: enteredTextIsInValid,
//     valueInputChangeHandler: textInputChangeHandler,
//     valueInputBlurHandler: textInputBlurHandler,
//     resetValue: textInputReset,
//   } = useInput((val) => val.trim() !== "");

//   const {
//     value: enteredPassword,
//     valueIsValid: enteredPasswordIsValid,
//     valueHasError: enteredPasswordIsInValid,
//     valueInputChangeHandler: passwordInputChangeHandler,
//     valueInputBlurHandler: passwordInputBlurHandler,
//     resetValue: PasswordInputReset,
//   } = useInput((val) => val.trim() !== "");

//   const {
//     value: enteredEmail,
//     valueIsValid: enteredEmailIsValid,
//     valueHasError: enteredEmailIsInValid,
//     valueInputChangeHandler: emailInputChangeHandler,
//     valueInputBlurHandler: emailInputBlurHandler,
//     resetValue: emailInputReset,
//   } = useInput((val) => val.includes("@"));

//   props.getInputProps(enteredEmailIsInValid, emailInputReset);

//   switch (props.type) {
//     case "email":
//       <div className={props.className}>
//         <label htmlFor="name">{props.label}</label>
//         <input
//           type={props.type}
//           id={props.id}
//           value={enteredEmail}
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//         />
//         {enteredEmailIsInValid && (
//           <p className="error-text">Enter a valid email!</p>
//         )}
//       </div>;
//       break;
//     case "password":
//       <div className={props.className}>
//         <label htmlFor="name">{props.label}</label>
//         <input
//           type={props.type}
//           id={props.id}
//           value={enteredPassword}
//           onChange={passwordInputChangeHandler}
//           onBlur={passwordInputBlurHandler}
//         />
//         {enteredPasswordIsInValid && (
//           <p className="error-text">Enter a valid email!</p>
//         )}
//       </div>;
//       break;
//     default:
//       <div className={props.className}>
//         <label htmlFor="name">{props.label}</label>
//         <input
//           type={props.type}
//           id={props.id}
//           value={enteredText}
//           onChange={textInputChangeHandler}
//           onBlur={textInputBlurHandler}
//         />
//         {enteredTextIsInValid && (
//           <p className="error-text">Enter a valid email!</p>
//         )}
//       </div>;
//       break;
//   }
// };

// export default InputComponent;
