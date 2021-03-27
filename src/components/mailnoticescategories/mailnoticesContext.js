import React, { createContext, useState } from "react";
import mailnoticesinfo from "./mailnoticesinfo.json";

export const MailNoticesContext = createContext();

export const MailNoticesContextProvider = ({ children }) => {
  let targetarray = mailnoticesinfo;
  const [state, setState] = useState(targetarray);

  const handleChange = (t) => (e) => {
    const target = findArray(state, t);
    const targetValues = target.values;
    const targetValue = findArray(targetValues, e.target.name);
    targetValue.value = e.target.value;
    setState([...state]);
  };

  function findArray(array, id) {
    const target = array.find((elm) => elm.id === id);
    return target;
  }

  return (
    <MailNoticesContext.Provider value={{ state, handleChange }}>
      {children}
    </MailNoticesContext.Provider>
  );
};

export default MailNoticesContextProvider;
