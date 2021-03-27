import React from "react";
import { Box, Typography } from "@material-ui/core";
// import { NoticesEmailAuth } from "./atomic/noticesemailauth"
import { EmailAuthCode } from "./molecular/emailauthcode";
import { ResendBtn } from "./atomic/resendbtn";
import { Caution } from "~/components/caution/style1";
export const EmailAuth = () => {
  return (
    <Box>
      <Caution />
      <Typography align="center" variant="h5">
        メールアドレスにお送りした認証コードをご入力ください
      </Typography>
      <Box textAlign="center">
        <EmailAuthCode />
      </Box>
      <ResendBtn />
    </Box>
  );
};
