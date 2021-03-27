import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { GlobalDispatchContext } from "~/context/GlobalContextProvider";

export const IdField = () => {
  const { textfield } = mystyles();

  const { dispatch } = useContext(GlobalDispatchContext);
  const changeLoginState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: "UPDATE_LOGIN_INFO",
      targetKey: "loginid",
      value: e.target.value,
    });
  };

  return (
    <TextField
      name={"loginid"}
      label={"ログインID"}
      type={"text"}
      variant="outlined"
      fullWidth
      className={textfield}
      onChange={changeLoginState}
      required={true}
    />
  );
};
