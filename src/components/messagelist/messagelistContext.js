import React, { createContext, useState } from "react";
import data from "~/components/messagebox/noticesdata.json";

export const MessageListContext = createContext();

export const MessageListContextProvider = ({ children }) => {
  const [state] = useState(data);

  const [selectPage, setSelectPage] = useState(1);
  const hundlePageNation = (e, p) => {
    console.log(e);
    console.log(p);
    setSelectPage(p);
  };

  const currentState = state[selectPage - 1];
  const head3 = state[0].slice(0, 3);

  return (
    <MessageListContext.Provider
      value={{ state, selectPage, hundlePageNation, currentState, head3 }}
    >
      {children}
    </MessageListContext.Provider>
  );
};

export default MessageListContextProvider;
