import React, { createContext, useState } from "react";

export const BiometricContext = createContext();

export const BiometricContextProvider = ({ children, prop }) => {
  console.log(prop.location.pathname);
  const [currentpath] = useState(prop.location.pathname);

  return (
    <BiometricContext.Provider value={{ currentpath }}>
      {children}
    </BiometricContext.Provider>
  );
};

export default BiometricContextProvider;
