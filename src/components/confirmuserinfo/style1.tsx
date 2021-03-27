import React from "react";
import { Box } from "@material-ui/core";
import { ConfirmItem } from "./molecular/confirmitem";
import { EmailAuthBtn } from "~/components/emailinput/atomic/emailauthbtn";

export const ConfirmUserInfo = () => {
  return (
    <Box>
      <ConfirmItem prop={"mail"} />
      <ConfirmItem prop={"password"} />
      <Box my={3}>
        <EmailAuthBtn />
      </Box>
    </Box>
  );
};
