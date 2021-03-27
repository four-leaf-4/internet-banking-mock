import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { FormWireTransferAccount } from "./molecular/formwiretransferaccount";
import { mystyles } from "~/styles/makestyles";

export const WireTransferaccount = () => {
  const { subtitle } = mystyles();

  return (
    <Box mb={3}>
      <Typography className={subtitle}>振替先口座</Typography>
      <Paper>
        <FormWireTransferAccount />
      </Paper>
    </Box>
  );
};
