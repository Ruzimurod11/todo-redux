import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.css";

const Login = () => {
   const navigate = useNavigate();
   const [hasError, setHasError] = useState(false);
   const [formValid, setFormValid] = useState(false);
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [emailError, setEmailError] = useState("Email cannot be empty");
   const [passwordError, setPasswordError] = useState(
      "Password cannot be empty"
   );
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      switch (e.target.name) {
         case "email":
            setEmailDirty(true);
            break;
         case "password":
            setPasswordDirty(true);
            break;
      }
   };

   const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setEmail(e.target.value);
      const re =
         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!re.test(String(e.target.value).toLowerCase())) {
         setEmailError("Incorrect email");
      } else {
         setEmailError("");
      }
   };

   const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setPassword(e.target.value);
      if (e.target.value.length < 3 || e.target.value.length > 8) {
         setPasswordError("Password length must be between 3 and 8");
      } else {
         setPasswordError("");
      }
   };

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();

      fetch("https://jsonplaceholder.typicode.com/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         body: new URLSearchParams({
            email,
            password,
         }),
      })
         .then((res) => {
            if (res.ok) {
               navigate("/home");
            } else {
               navigate("/login");
               setHasError(true);
            }
         })
         .catch((error) => console.log(error));
   };

   useEffect(() => {
      if (emailError || passwordError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [emailError, passwordError]);

   return (
      <div className={s.form}>
         {hasError ? (
            <div className={s.error}>Login or Password is wrong</div>
         ) : (
            <></>
         )}
         <>
            <form className={s.wrapper} onSubmit={handleSubmit}>
               <h1>Login</h1>
               {emailDirty && emailError && (
                  <div style={{ color: "white" }}> {emailError} </div>
               )}
               <input
                  className={s.input}
                  onBlur={blurHandler}
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
               />
               {passwordDirty && passwordError && (
                  <div style={{ color: "white" }}> {passwordError} </div>
               )}
               <input
                  className={s.input}
                  onBlur={blurHandler}
                  value={password}
                  onChange={(e) => passwordHandler(e)}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
               />
               <button className={s.button} disabled={!formValid}>
                  Login
               </button>
            </form>
         </>
      </div>
   );
};

export default Login;
