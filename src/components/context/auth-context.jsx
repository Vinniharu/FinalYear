import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const auth = localStorage.getItem("Auth");
    return auth ? JSON.parse(auth) : false;
  });

  useEffect(() => {
    localStorage.setItem("Auth", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
  };

  const contextValue = {
    isLoggedIn,
    onLogIn: logInHandler,
    onLogOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
