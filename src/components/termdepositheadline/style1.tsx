import React from "react";
import { Typography, Box } from "@material-ui/core";

export const TermDepositHeadline = () => {
  const userName = "xxx yyy";
  return (
    <Box>
      <Typography component="span">{userName}様</Typography>
      <Typography component="span">いつもお世話になっております。</Typography>
    </Box>
  );
};
