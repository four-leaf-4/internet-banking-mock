import React from "react";
import { Typography, Paper, Box, Grid } from "@material-ui/core";
import { AccountType } from "./accountType";
import { AccountNumber } from "./accountNumber";
import { Balance } from "./balance";

export const Bankaccount = (prop) => {
  const { accountType, accountNumber, balance, availablebalance } = prop.data;
  return (
    <Paper>
      <Box p={1} mb={2}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={6} xs={12}>
            <AccountType value={accountType} />
            <AccountNumber value={accountNumber} />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">口座残高：</Typography>
              <Typography variant="subtitle2" component="p">
                {balance}円
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">利用可能残高：</Typography>
              <Typography variant="subtitle2">{availablebalance}円</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Bankaccount;
