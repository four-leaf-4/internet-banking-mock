import React from "react";
import { navigate } from "gatsby";
import { Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Btnlogout = () => {
  const { logoutbutton } = mystyles();
  const logout = (_event) => {
    navigate("/");
  };
  return (
    <Button size="small" className={logoutbutton} onClick={logout}>
      ログアウト
    </Button>
  );
};
