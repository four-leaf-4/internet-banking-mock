import React, { createContext, useState } from "react";
import userinfo from "./userinfo.json";

export const ChangeUserInfoContext = createContext();

export const ChangeUserInfoContextProvider = ({ children }) => {
  const [state, setState] = useState(userinfo);

  const changeRadio = (e) => {
    state.changeitems.selectvalue = e.target.value;
    setState({ ...state });
  };

  const hundleInput = (e) => {
    const target = state.changedinfo.find((elm) => elm.id === e.target.id);
    target.value = e.target.value;
    setState({ ...state });
  };

  return (
    <ChangeUserInfoContext.Provider value={{ state, changeRadio, hundleInput }}>
      {children}
    </ChangeUserInfoContext.Provider>
  );
};

export default ChangeUserInfoContextProvider;
