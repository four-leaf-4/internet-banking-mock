import React from "react";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const NoteSMS = () => {
  const { maininner } = mystyles();

  return (
    <Box className={maininner}>
      <Typography variant="overline">※ご注意</Typography>
      <Typography align="center">
        SMSが受信可能な電話番号をご指定ください
      </Typography>
    </Box>
  );
};
