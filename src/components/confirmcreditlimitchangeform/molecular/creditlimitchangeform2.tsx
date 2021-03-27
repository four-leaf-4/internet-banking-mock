import React from "react";
import { Box, Typography } from "@material-ui/core";
import { BeforeAfter } from "./beforeafter2";
import { mystyles } from "~/styles/makestyles";

export const CreditLimitChangeForm = () => {
  const info = {
    headline: "限度額",
    limits: { beforelimit: 30000, afterlimit: 0 },
  };
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography className={subtitle} component="h4">
        {info.headline}
      </Typography>
      <BeforeAfter prop={info.limits} />
    </Box>
  );
};
