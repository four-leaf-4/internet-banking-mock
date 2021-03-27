import React from "react";
import { Box, Typography } from "@material-ui/core";
import { EmailForm } from "./molecular/emailform";
import { EmailAuthBtn } from "./atomic/emailauthbtn";
import { mystyles } from "~/styles/makestyles";

export const EmailInput = () => {
  const { innerbox } = mystyles();

  return (
    <Box pb={3}>
      <Typography component="h3" variant="subtitle2">
        <Box mb={3} color="primary.dark">
          メールアドレスの確認
        </Box>
      </Typography>
      <Typography align="center" variant="h5">
        登録されたメールアドレスをご入力ください
      </Typography>
      <Box py={3} className={innerbox}>
        <EmailForm />
      </Box>
      <EmailAuthBtn />
    </Box>
  );
};
