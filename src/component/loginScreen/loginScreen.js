import React, { useState } from "react";
import "../../component/loginScreen/loginScreen.css";
import SignupScreen from "../signupscreen/SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
        />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginscreen__button"
        >
          Sign Up
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, Tv Programs and more</h1>
            <h2>Watch anywhere, Cancel any time</h2>
            <h3>
              Read to Watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="login__input__getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
