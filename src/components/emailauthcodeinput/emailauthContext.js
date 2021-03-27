import React, { createContext, useState } from "react";
import { navigate } from "gatsby";
import codes from "./codes.json";

export const EmailAuthContext = createContext();

export const EmailAuthContextProvider = ({ children }) => {
  const [state, setState] = useState(codes);
  console.log(state);

  const changehundle = (i) => (e) => {
    const value = e.target.value.slice(0, 1);
    e.target.value = value;
    const target = state.find((elm) => elm.id === i);
    if (value) {
      target.code = Number(value);
    }
    setState([...state]);
    const flag = state.every((elm) => Number.isFinite(elm.code));
    console.log(flag);
    if (flag) {
      navigate("/reregisterpassword");
    }
  };

  return (
    <EmailAuthContext.Provider value={{ state, changehundle }}>
      {children}
    </EmailAuthContext.Provider>
  );
};

export default EmailAuthContextProvider;
