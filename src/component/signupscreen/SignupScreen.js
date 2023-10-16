import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      const navigate = useNavigate();

      const signIn = (e) =>{
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
       auth.signInWithEmailAndPassword(email , password)
       .then((authUser)=>{
        console.log("user signed in",authUser.user);
        navigate('/')
       }).catch((error) => {
        // Handle sign-in error
        alert(error.message);
      });
      };
      
      const register = (e) =>{ 
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            auth.createUserWithEmailAndPassword(email , password)
            .then((authUser)=>{
              console.log(authUser.user);
            }).catch((error)=>{
              alert(error.message);
            })
      };


  return (
    <div className="signup__screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}  >SIGN IN</button>
        <h4>
          <span className="signup_grey">New to netflix? </span>
          <span className="signup__link" onClick={register}> Sign Up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
