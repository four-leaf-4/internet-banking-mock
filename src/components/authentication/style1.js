import React from "react";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { InfoSms } from "./molecular/infosms";

export const Authentication = () => {
  const { mainarea } = mystyles();

  return (
    <Box className={mainarea} component="section" align="conter">
      <Typography component="h3" variant="subtitle2">
        <Box color="primary.dark" component="span">
          生体認証
        </Box>
      </Typography>
      <InfoSms />
    </Box>
  );
};
