import React, { useContext } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { LoginFormContext } from "../loginformContext";

export const VisibleAdornment = () => {
  const context = useContext(LoginFormContext);
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = context;

  const visibilityComponent = showPassword ? <Visibility /> : <VisibilityOff />;

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {visibilityComponent}
      </IconButton>
    </InputAdornment>
  );
};
