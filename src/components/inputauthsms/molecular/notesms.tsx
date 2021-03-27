import React from "react";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const NoteSMS = () => {
  const { maininner } = mystyles();

  return (
    <Box className={maininner}>
      <Typography align="left">※ご注意</Typography>
      <Typography align="left">
        SMSが受信可能な電話番号をご指定ください
      </Typography>
    </Box>
  );
};
