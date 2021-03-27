import React, { useContext } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { LoginFormContext } from "../loginformContext";
import { VisibleAdornment } from "./visibleadornment";
import { GlobalDispatchContext } from "~/context/GlobalContextProvider";
import { GlobalStateContext } from "~/context/GlobalContextProvider";

export const PassWordField = () => {
  const { textfield } = mystyles();
  const { dispatch } = useContext(GlobalDispatchContext);

  const changeLoginState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: "UPDATE_LOGIN_INFO",
      targetKey: "password",
      value: e.target.value,
    });
  };

  const context = useContext(LoginFormContext);
  const { showPassword } = context;
  const type = showPassword ? "text" : "password";

  return (
    <FormControl className={textfield} variant="outlined" fullWidth>
      <InputLabel variant="outlined" htmlFor="input-loginpassword">
        パスワード
      </InputLabel>
      <OutlinedInput
        id="input-loginpassword"
        name="password"
        type={type}
        onChange={changeLoginState}
        endAdornment={<VisibleAdornment />}
      />
    </FormControl>
  );
};
