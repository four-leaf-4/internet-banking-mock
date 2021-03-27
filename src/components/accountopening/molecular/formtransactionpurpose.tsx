import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { MainTransactionPurpose } from "../atomic/maintransactionpurpose";
import { OtherTransactionPurpose } from "../atomic/othertransactionpurpose";
import { mystyles } from "~/styles/makestyles";

export const FormTransactionPurpose = () => {
  const { subtitle } = mystyles();

  return (
    <Box mb={2}>
      <Typography className={subtitle}>取引目的</Typography>
      <Grid container spacing={3} direction="column">
        <Grid item xs={12} sm={6}>
          <MainTransactionPurpose />
        </Grid>
        <Grid item xs={12}>
          <OtherTransactionPurpose />
        </Grid>
      </Grid>
    </Box>
  );
};
