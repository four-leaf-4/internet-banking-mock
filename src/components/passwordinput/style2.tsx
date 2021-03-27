import React from "react";
import { Box, Typography } from "@material-ui/core";
import { PasswordForm } from "./molecular/passwordform2";
import { SMSauthBtn } from "./atomic/smsauthbtn";
import { mystyles } from "~/styles/makestyles";

export const PasswordInput = () => {
  const { innerbox } = mystyles();

  return (
    <Box>
      <Typography component="h3" variant="subtitle2">
        <Box mb={3} color="primary.dark">
          新しいパスワードの設定
        </Box>
      </Typography>
      <Typography align="center" variant="h5">
        パスワードをご入力ください
      </Typography>
      <Box py={3} className={innerbox}>
        <PasswordForm />
      </Box>
      <SMSauthBtn />
    </Box>
  );
};
