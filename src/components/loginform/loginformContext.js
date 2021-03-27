import React, { createContext, useState } from "react";

export const LoginFormContext = createContext();

export const LoginFormContextProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginFormContext.Provider
      value={{
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
      }}
    >
      {children}
    </LoginFormContext.Provider>
  );
};

export default LoginFormContextProvider;
