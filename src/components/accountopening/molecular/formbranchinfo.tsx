import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { BranchInfo } from "../atomic/branchinfo";
import { mystyles } from "~/styles/makestyles";

export const FormBranchInfo = () => {
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography className={subtitle}>支店情報</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <BranchInfo />
        </Grid>
      </Grid>
    </Box>
  );
};
