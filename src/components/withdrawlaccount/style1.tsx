import React from "react";
import { Box, Paper } from "@material-ui/core";
import { Withdrawlist } from "./molecular/withdrawlist";
import { Withdrawheadline } from "./atomic/withdrawheadline";

export const Withdrawlaccount = () => {
  return (
    <Box mb={3}>
      <Withdrawheadline />
      <Paper>
        <Withdrawlist />
      </Paper>
    </Box>
  );
};
