import React, { createContext, useState } from "react";

export const BankaccountContext = createContext();

export const BankaccountContextProvider = ({ children }) => {
  const [bankaccount, setBankaccount] = useState(1);
  const handleChange = (event) => {
    setBankaccount(event.target.value);
  };

  return (
    <BankaccountContext.Provider value={{ bankaccount, handleChange }}>
      {children}
    </BankaccountContext.Provider>
  );
};

export default BankaccountContextProvider;
