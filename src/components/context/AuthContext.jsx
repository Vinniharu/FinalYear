import React, { useState } from "react";
import AuthContext from "./auth-context";


const AuthenticationContext = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    setIsLoggedIn(true)
  }

  const logOutHandler = () => {
    setIsLoggedIn(true);
  };

  const AuthValue = {
    isLoggedIn,
    onLogin: logInHandler,
    onLogOut: logOutHandler
  };
  return (
    <AuthContext.Provider value={AuthValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContext;
