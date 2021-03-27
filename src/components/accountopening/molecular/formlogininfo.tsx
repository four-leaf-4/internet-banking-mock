import React, { useContext } from "react";
import { Typography, Box, TextField } from "@material-ui/core";
import { LoginInfoInput } from "../atomic/logininfoinput";
import { mystyles } from "~/styles/makestyles";

export const FormLoginInfo = () => {
  const { subtitle } = mystyles();

  return (
    <Box mb={3}>
      <Typography className={subtitle}>ログイン情報</Typography>
      <LoginInfoInput prop={"mailaddress"} />
      <LoginInfoInput prop={"password"} />
    </Box>
  );
};
