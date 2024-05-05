import React, { useState, useContext } from "react";
import StringInput from "../UI/StringInput";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../../firebase";
import AuthContext from "../context/auth-context";
import { InfinitySpin } from "react-loader-spinner";
import writeUserData from "../../../UserFirebase";
import fetchUserData from "../../../fetchUserData";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

const AuthForm = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogIn] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();

  const emailInputHandler = (value) => {
    setEnteredEmail(value);
    console.log(enteredEmail);
  };

  const passwordInputHandler = (value) => {
    setEnteredPassword(value);
    console.log(enteredPassword);
  };

  const isLoginToggle = () => {
    setIsLogIn(!isLogin);
  };

  const auth = getAuth(app);

  const submitHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          authContext.onLogIn();
          navigate("/home");
          fetchUserData(user.uid);
          setLoading(false);
        })
        .catch((error) => {
          setErrorCode(error.code);
          setLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          authContext.onLogIn();
          navigate("/home");
          writeUserData(user.uid, admin);
          fetchUserData(user.uid);

          setLoading(false);
        })
        .catch((error) => {
          setErrorCode(error.code);
          setLoading(false);
        });
    }
  };

  return (
    <form
      className="p-4 rounded-lg border-2 m-2 max-w-3xl md:mx-auto"
      onSubmit={submitHandler}
    >
      {errorCode ? (
        <div className="p-2 rounded bg-red-600 text-white">
          <span className="flex items-start justify-end">
            <button
              className="text-red-400 text-lg"
              onClick={() => {
                setErrorCode("");
                setErrorMessage("");
              }}
            >
              <IoCloseCircleOutline />
            </button>
          </span>
          <h1 className="text-xl font-bold">{errorCode}</h1>
        </div>
      ) : (
        ""
      )}
      <h1 className="font-semibold text-2xl md:text-4xl mb-4">
        {isLogin ? "Login Page" : "Sign up page"}
      </h1>
      <StringInput
        title="email"
        placeholder="Email address"
        name="Email Address"
        onChange={emailInputHandler}
      />
      <StringInput
        title="password"
        placeholder="Password"
        name="Password"
        type="password"
        onChange={passwordInputHandler}
      />
      {isLogin ? (
        ""
      ) : (
        <section className="flex items-center justify-start gap-[1rem] m-[1rem]">
          <input
            type="checkbox"
            name="admin"
            id="admin"
            checked={admin}
            onChange={() => setAdmin(!admin)}
          />
          <p className="font-semibold text-xl">Are you a lecturer?</p>
        </section>
      )}
      <span
        onClick={isLoginToggle}
        className="text-[#0E1C36] text-lg font-semibold cursor-pointer block mb-[2rem]"
      >
        {isLogin ? "Create an account here" : "Already have an account?"}
      </span>
      {loading ? (
        <button
          type="submit"
          className="m-auto block text-center bg-[#0E1C36] text-white font-semibold p-2 rounded-md"
          disabled={loading}
        >
          <InfinitySpin
            visible={true}
            width="60"
            color="#fff"
            ariaLabel="infinity-spin-loading"
          />
        </button>
      ) : (
        <button
          type="submit"
          className="m-auto block text-center bg-[#0E1C36] text-white font-semibold p-2 rounded-md"
          disabled={loading}
        >
          {isLogin ? "Log in" : "Sign Up"}
        </button>
      )}
    </form>
  );
};

export default AuthForm;
