import React, { createContext, useState } from "react";

export const CreditLimitContext = createContext();

export const CreditLimitContextProvider = ({ children }) => {
  const [creditlimit, setCreditlimit] = useState({
    limit: 0,
    confirm: false,
  });

  const limitchange = (e) => {
    setCreditlimit({ ...creditlimit, limit: e.target.value });
  };

  const changeconfirm = (flag) => {
    setCreditlimit({ ...creditlimit, confirm: flag });
  };
  console.log(creditlimit);
  return (
    <CreditLimitContext.Provider
      value={{ creditlimit, limitchange, changeconfirm }}
    >
      {children}
    </CreditLimitContext.Provider>
  );
};

export default CreditLimitContext;
