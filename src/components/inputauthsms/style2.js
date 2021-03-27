import React from "react";
import { Box, Typography } from "@material-ui/core";
import { InputSMS } from "./molecular/inputsms2";
import { NoteSMS } from "./molecular/notesms2";
import { ResendBtn } from "./atomic/resendbtn";

export const InputSMSs = () => {
  return (
    <Box mb={3}>
      <Typography align="center" variant="h6">
        ご登録の電話番号に認証コードを送信いたしました。
      </Typography>
      <InputSMS />
      <NoteSMS />
      <ResendBtn />
    </Box>
  );
};
