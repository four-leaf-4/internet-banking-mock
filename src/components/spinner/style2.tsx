import React from "react";
import { Box, CircularProgress, Paper, Snackbar } from "@material-ui/core";
import { InfoSms } from "./molecular/infosms";

export const Spinner = () => {
  return (
    <Box component={Paper} p={3}>
      <InfoSms />
    </Box>
  );
};
