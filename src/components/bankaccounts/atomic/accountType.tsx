import React from "react";
import { Typography } from "@material-ui/core";

export const AccountType = (prop) => {
  return (
    <Typography variant="subtitle1" component="span">
      {prop.value}
    </Typography>
  );
};

export default AccountType;
