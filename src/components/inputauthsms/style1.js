import React from "react";
import { Box, Typography } from "@material-ui/core";
import { InputSMS } from "./molecular/inputsms";
import { NoteSMS } from "./molecular/notesms";
import { ResendBtn } from "./atomic/resendbtn";

export const InputSMSs = () => {
  return (
    <Box mb={3}>
      <Typography align="center" variant="h5">
        ご登録の電話番号に認証コードを送信いたしました。
      </Typography>
      <InputSMS />
      <NoteSMS />
      <ResendBtn />
    </Box>
  );
};
