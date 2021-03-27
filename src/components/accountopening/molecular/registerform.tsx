import React, { useContext } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { FormLoginInfo } from "./formlogininfo";
import { FormPersonalInfo } from "./formpersonalinfo";
import { FormAddress } from "./formaddress";
import { FormContactInfo } from "./formcontactinfo";
import { FormOccupation } from "./formoccupation";
import { FormTransactionPurpose } from "./formtransactionpurpose";
import { FormBranchInfo } from "./formbranchinfo";
import { FormCashcardInfo } from "./formcashcardinfo";

export const RegisterForm = () => {
  const { nextStep } = useContext(AccountOpeningContext);

  return (
    <Box mb={2}>
      <Box mb={2}>
        <FormLoginInfo />
      </Box>
      <Box mb={2}>
        <FormPersonalInfo />
      </Box>
      <Box mb={2}>
        <FormAddress />
      </Box>
      <Box mb={2}>
        <FormContactInfo />
      </Box>
      <Box mb={2}>
        <FormOccupation />
      </Box>
      <Box mb={2}>
        <FormTransactionPurpose />
      </Box>
      <Box mb={2}>
        <FormBranchInfo />
      </Box>
      <Box mb={2}>
        <FormCashcardInfo />
      </Box>
    </Box>
  );
};
