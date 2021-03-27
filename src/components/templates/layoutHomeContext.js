import React, { createContext, useState } from "react";

export const LayoutHomeContext = createContext();

export const LayoutHomeContextProvider = ({ children, prop }) => {
  const [currentpath] = useState(prop.location.pathname);

  return (
    <LayoutHomeContext.Provider value={{ currentpath }}>
      {children}
    </LayoutHomeContext.Provider>
  );
};

export default LayoutHomeContext;
