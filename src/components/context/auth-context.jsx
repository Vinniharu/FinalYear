import { createContext } from "react";
import React, { useState } from "react";

const AuthContext = createContext({
  isLoggedIn: true,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogIn: logInHandler,
        onLogOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
