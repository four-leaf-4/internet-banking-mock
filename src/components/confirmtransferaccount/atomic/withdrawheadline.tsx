import React from "react";
import { Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Withdrawheadline = () => {
  const { subtitle } = mystyles();

  return <Typography className={subtitle}>出金口座</Typography>;
};
