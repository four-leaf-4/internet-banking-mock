import React, { useContext } from "react";
import { Typography, Box, Button, Paper } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { IdentityVerificationDocuments } from "./identityverificationdocuments";
import IMG from "~/images/post.svg";
import { mystyles } from "~/styles/makestyles";

export const MailApply = () => {
  const { nextStep } = useContext(AccountOpeningContext);
  const { subtitle } = mystyles();

  return (
    <Box textAlign="center">
      <Typography className={subtitle} component="h5">
        郵送申込
      </Typography>
      <Box component={Paper} p={2}>
        <Typography variant="body2">
          申込フォーム入力後、本人確認書類を郵送
        </Typography>
        <Box my={2}>
          <img src={IMG} alt="ポスト" width="120vw" />
        </Box>
        <IdentityVerificationDocuments prop={"mail"} />
        <Button variant="contained" color="secondary" disabled={true}>
          郵送申込
        </Button>
      </Box>
    </Box>
  );
};
