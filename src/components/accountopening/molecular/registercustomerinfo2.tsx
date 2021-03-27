import React, { useContext } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { RegisterForm } from "./registerform2";
import { Caution } from "~/components/caution/style1";
import { mystyles } from "~/styles/makestyles";

export const RegisterCustomerInfo = () => {
  const { nextStep, hundleConfirmMode, isConfirmMode } = useContext(
    AccountOpeningContext,
  );
  const clickConfirmBtn = () => {
    nextStep();
    hundleConfirmMode();
  };
  const { prevStep } = useContext(AccountOpeningContext);
  const { backbtn } = mystyles();
  const confirmBtn = (
    <Button
      variant="contained"
      color="secondary"
      className={backbtn}
      onClick={clickConfirmBtn}
    >
      確認
    </Button>
  );
  const authBtn = (
    <Button
      variant="contained"
      color="secondary"
      className={backbtn}
      onClick={nextStep}
    >
      メール認証
    </Button>
  );
  const btn = isConfirmMode ? authBtn : confirmBtn;
  return (
    <Box>
      <Caution />
      <Typography component="h3" variant="subtitle2">
        <Box color="primary.dark" component="span">
          登録情報
        </Box>
      </Typography>
      <RegisterForm />
      <Box mb={3}>{btn}</Box>
      <Button variant="contained" onClick={prevStep} className={backbtn}>
        戻る
      </Button>
    </Box>
  );
};
