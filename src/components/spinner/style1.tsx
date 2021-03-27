import React from "react";
import { Box, CircularProgress, Paper } from "@material-ui/core";
import { InfoSms } from "./molecular/infosms";

export const Spinner = () => {
  return (
    <Box component={Paper} p={3} textAlign="center">
      <InfoSms />
      <CircularProgress color="inherit" />
    </Box>
  );
};
