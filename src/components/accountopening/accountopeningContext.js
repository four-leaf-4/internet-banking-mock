import React, { createContext, useState } from "react";
import initinfo from "./registerinfo.json";

export const AccountOpeningContext = createContext();

export const AccountOpeningContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const arraysteps = [
    "注意事項",
    "ご利用規約",
    "申込方法の選択",
    "ご登録情報の入力",
    "入力確認",
    "メール認証",
  ];
  const currenttitle = arraysteps[step];
  console.log(currenttitle);

  const nextStep = () => {
    setStep((pre) => pre + 1);
  };
  const prevStep = () => {
    setStep((pre) => pre - 1);
  };

  const [isConfirmMode, setIsConfirmMode] = useState(false);
  const hundleConfirmMode = () => {
    setIsConfirmMode(!isConfirmMode);
  };

  const [registerinfo, setRegisterinfo] = useState(initinfo);

  const changeRegisterInfo = (e) => {
    const { value, name, id } = e.target;
    const target = registerinfo[name].find((elm) => elm.id === id);
    target.input = value;
    setRegisterinfo({ ...registerinfo });
  };

  const changeLoginInfo = (t) => (e) => {
    const { value, id } = e.target;
    const target = registerinfo.logininfo[t].find((elm) => elm.id === id);
    target.input = value;
    setRegisterinfo({ ...registerinfo });
  };

  return (
    <AccountOpeningContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        arraysteps,
        currenttitle,
        registerinfo,
        changeRegisterInfo,
        changeLoginInfo,
        isConfirmMode,
        hundleConfirmMode,
      }}
    >
      {children}
    </AccountOpeningContext.Provider>
  );
};

export default AccountOpeningContextProvider;
