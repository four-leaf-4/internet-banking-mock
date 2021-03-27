import React, { createContext, useState } from "react";

export const SMSauthContext = createContext();

export const SMSauthContextProvider = ({ children, prop }) => {
  console.log(prop.location.pathname);
  console.log(prop.location.state);
  prop.location.state = { prevPath: "/" };
  // if (prop.location.state.prevPath) {
  //     statePrevPath = prop.location.state.prevPath
  // }

  const [currentpath] = useState(prop.location.pathname);
  const [prevPath] = useState(prop.location.state.prevPath);

  return (
    <SMSauthContext.Provider value={{ currentpath, prevPath }}>
      {children}
    </SMSauthContext.Provider>
  );
};

export default SMSauthContextProvider;
